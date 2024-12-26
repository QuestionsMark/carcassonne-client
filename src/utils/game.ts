import { CONFIG } from "../../config/config";
import { ContentType, Map, MapTile, Tile, TileEdges } from "../types";

const CENTER_TILE_INDEX = Math.floor(CONFIG.GRID_SIZE * CONFIG.GRID_SIZE / 2);

export const getDefaultTilesToDraw = (multiplier: number): { randomTile: Tile, defaultTilesToDraw: Tile[] } => {
    const tilesToDraw = CONFIG.TILE_TYPES.reduce((acc, type) => {
        for (let i = 0; i < type.count * multiplier; i++) {
            acc.push({
                ...type.tile,
                _id: `${type.tile._id}_${i}`,
            });
        }
        return acc;
    }, [] as Tile[]);
    const randomIntex = Math.floor(Math.random() * tilesToDraw.length);
    return {
        randomTile: tilesToDraw[randomIntex],
        defaultTilesToDraw: tilesToDraw.filter((_, index) => index !== randomIntex),
    };
};

export const getDefaultMapState = (tile: Tile): Map => {
    return Array.from({ length: CONFIG.GRID_SIZE * CONFIG.GRID_SIZE }, () => null).map((_, index) => {
        const coords = {
            x: index % CONFIG.GRID_SIZE,
            y: Math.floor(index / CONFIG.GRID_SIZE),
        };
        if (index === CENTER_TILE_INDEX) return {
            _id: String(index),
            coords,
            isActive: true,
            rotate: 0,
            tile,
        } as MapTile;
        return {
            _id: String(index),
            isActive: false,
            coords,
        };
    });
};

// Funkcja sprawdzająca kompatybilność dwóch krawędzi
export const areEdgesCompatible = (edge1: ContentType[], edge2: ContentType[]): boolean =>
    edge1.every((content, index) => content === edge2[edge2.length - 1 - index]);

// Funkcja obracająca kafelek o 90 stopni zgodnie z ruchem wskazówek zegara
export const rotateTile = (tile: Tile, rotations: number): Tile => {
    let rotatedTile = tile;
    for (let i = 0; i < rotations; i++) {
        const rotatedEdges: TileEdges = [
            rotatedTile.contentMap.edges[3],
            rotatedTile.contentMap.edges[0],
            rotatedTile.contentMap.edges[1],
            rotatedTile.contentMap.edges[2],
        ];

        rotatedTile = {
            ...rotatedTile,
            contentMap: {
                ...rotatedTile.contentMap,
                edges: rotatedEdges,
            },
        };
    }
    return rotatedTile;
};

// Funkcja sprawdzająca, czy kafelek może zostać położony na mapie
export const findPossiblePlacements = (
    map: Map,
    newTile: Tile
): { x: number; y: number; rotation: number }[] => {
    const possiblePlacements: { x: number; y: number; rotation: number }[] = [];

    // Obliczenie sąsiadujących koordynatów
    const directions = [
        { dx: 0, dy: -1 }, // Góra
        { dx: 1, dy: 0 },  // Prawo
        { dx: 0, dy: 1 },  // Dół
        { dx: -1, dy: 0 }, // Lewo
    ];

    const mapSize = Math.sqrt(map.length);

    // Iteracja przez wszystkie aktywne kafelki
    map.forEach((mapTile) => {
        if (!mapTile.isActive) return;

        const { x, y } = mapTile.coords;

        // Sprawdzanie sąsiadów
        directions.forEach(({ dx, dy }, edgeIndex) => {
            const neighborX = x + dx;
            const neighborY = y + dy;

            // Upewniamy się, że współrzędne są w granicach mapy
            if (neighborX < 0 || neighborX >= mapSize || neighborY < 0 || neighborY >= mapSize) {
                return;
            }

            // Znajdujemy sąsiada na mapie
            const neighbor = map.find(
                (t) => t.coords.x === neighborX && t.coords.y === neighborY
            );

            // Jeśli sąsiad jest aktywny, ignorujemy go
            if (neighbor?.isActive) return;

            // Sprawdzanie kompatybilności z aktywnymi sąsiadami
            for (let rotation = 0; rotation < 4; rotation++) {
                const rotatedTile = rotateTile(newTile, rotation);
                const placedEdge = mapTile.tile.contentMap.edges[edgeIndex];
                const newEdge = rotatedTile.contentMap.edges[(edgeIndex + 2) % 4];

                if (!areEdgesCompatible(placedEdge, newEdge)) continue;

                // Sprawdzamy inne sąsiednie kafelki
                const isCompatibleWithAllNeighbors = directions.every(({ dx, dy }, checkEdgeIndex) => {
                    const checkX = neighborX + dx;
                    const checkY = neighborY + dy;
                    const neighborTile = map.find(
                        (t) => t.coords.x === checkX && t.coords.y === checkY && t.isActive
                    ) as MapTile | null;

                    if (!neighborTile) return true; // Brak kafelka w tym kierunku, więc pasuje

                    const neighborEdge = neighborTile.tile.contentMap.edges[(checkEdgeIndex + 2) % 4];
                    const rotatedEdge = rotatedTile.contentMap.edges[checkEdgeIndex];

                    return areEdgesCompatible(rotatedEdge, neighborEdge);
                });

                if (isCompatibleWithAllNeighbors) {
                    possiblePlacements.push({ x: neighborX, y: neighborY, rotation });
                }
            }
        });
    });

    return possiblePlacements;
};