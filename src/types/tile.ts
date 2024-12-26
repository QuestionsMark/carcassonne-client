export type ContentType = 'grass' | 'road' | 'city'; // | 'river'

export type TileEdge = [ContentType, ContentType, ContentType];
export type TileEdges = [TileEdge, TileEdge, TileEdge, TileEdge];

export interface Tile {
    _id: string;
    src: string;
    contentMap: {
        edges: TileEdges;
        center: ContentType[];
        church: boolean;
        farm: boolean;
    };
    shield: boolean;
    roadEnd: boolean;
}

export interface MapTile {
    isActive: true;
    _id: string;
    rotate: 0 | 1 | 2 | 3;
    tile: Tile;
    coords: {
        x: number;
        y: number;
    };
}

export interface InactiveMapTile {
    isActive: false;
    _id: string;
    coords: {
        x: number;
        y: number;
    };
}

export interface DrawnTile {
    rotate: 0 | 1 | 2 | 3;
    tile: Tile | null;
}