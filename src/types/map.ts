import { InactiveMapTile, MapTile } from "./tile";

export type Map = (MapTile | InactiveMapTile)[];