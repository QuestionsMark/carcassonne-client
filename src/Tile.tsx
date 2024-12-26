import { useGame } from "./contexts/game.context";
import { InactiveMapTile, MapTile } from "./types";
import { MyError } from "./utils/error";
import { findPossiblePlacements } from "./utils/game";

interface Props {
    item: MapTile | InactiveMapTile;
}

export const Tile = ({ item }: Props) => {
    const { coords, isActive, _id } = item;

    const { drawTile, drawnTile, map, putTileOnMap } = useGame();

    const handleClick = () => {
        if (item.isActive || !drawnTile.tile) return;
        const possiblePlacements = findPossiblePlacements(map, drawnTile.tile);
        console.log(possiblePlacements);
        const foundPlacement = possiblePlacements.find(p => p.x === coords.x && p.y === coords.y && p.rotation === drawnTile.rotate);
        if (!foundPlacement) throw new MyError('Nie można umieścić kafelka w tym miejscu!');
        putTileOnMap(drawnTile.tile, _id);
        drawTile();
    };

    if (!isActive) return <li className="tile" onClick={handleClick}>{coords.x} : {coords.y}</li>;
    const { rotate, tile } = item;

    return (
        <li className="tile" style={{ backgroundImage: `url('${tile.src}')`, transform: `rotateZ(${90 * rotate}deg)` }} />
    );
};