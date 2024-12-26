import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { DrawnTile, InactiveMapTile, MapTile, Tile } from "../types";
import { getDefaultMapState, getDefaultTilesToDraw, rotateTile } from "../utils/game";
import { MyError } from "../utils/error";

interface Props {
    children: ReactNode;
}

interface GameContextValue {
    drawnTile: DrawnTile;
    setDrawnTile: Dispatch<SetStateAction<DrawnTile>>;
    drawTile: (firstDraw?: boolean) => Tile;
    tilesToDraw: Tile[];
    setTilesToDraw: Dispatch<SetStateAction<Tile[]>>;
    map: (MapTile | InactiveMapTile)[];
    setMap: Dispatch<SetStateAction<(MapTile | InactiveMapTile)[]>>;
    putTileOnMap: (tile: Tile, _id: string) => void;
}

const GameContext = createContext<GameContextValue>(null!);

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }: Props) => {
    const { randomTile, defaultTilesToDraw } = getDefaultTilesToDraw(1);
    const [tilesToDraw, setTilesToDraw] = useState<Tile[]>(defaultTilesToDraw);
    const [drawnTile, setDrawnTile] = useState<DrawnTile>({
        rotate: 0,
        tile: null,
    });

    const drawTile = () => {
        if (tilesToDraw.length === 0) throw new MyError('Brak kafelków do wylosowania');
        const randomTile = tilesToDraw[Math.floor(Math.random() * tilesToDraw.length)];
        setTilesToDraw(tiles => tiles.filter(tile => tile._id !== randomTile._id));
        setDrawnTile({
            rotate: 0,
            tile: randomTile,
        });
        return randomTile;
    };

    const [map, setMap] = useState<(MapTile | InactiveMapTile)[]>(getDefaultMapState(randomTile));

    const putTileOnMap = (tile: Tile, _id: string) => {
        const rotatedTile = rotateTile(tile, drawnTile.rotate);
        setMap(state => state.map(mapTile => {
            if (mapTile._id === _id) return {
                ...mapTile,
                tile: rotatedTile,
                isActive: true,
                rotate: drawnTile.rotate,
            };
            return mapTile;
        }));
    };

    return (
        <GameContext.Provider value={{
            drawnTile,
            setDrawnTile,
            drawTile,
            map,
            setMap,
            setTilesToDraw,
            tilesToDraw,
            putTileOnMap,
        }}>
            {children}
        </GameContext.Provider>
    );
};