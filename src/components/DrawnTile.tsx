import { useEffect } from "react";
import { useGame } from "../contexts/game.context";
import { DrawnTile as DrawnTileI } from "../types";

export const DrawnTile = () => {
    const { drawnTile, drawTile, setDrawnTile, tilesToDraw } = useGame();

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "a" || event.key === "d") {
                setDrawnTile(s => ({ ...s, rotate: event.key === "a" ? (s.rotate - 1 < 0 ? 3 : s.rotate - 1) : (s.rotate + 1 > 3 ? 0 : s.rotate + 1) }) as DrawnTileI);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        if (!drawnTile.tile) {
            drawTile();
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div className="drawn-tile">
            <img src={drawnTile.tile?.src} alt="" style={{ transform: `rotateZ(${90 * drawnTile.rotate}deg)` }} className="drawn-tile__img" />
            <p className="drawn-tile__count">Pozostałe kafelki: {tilesToDraw.length}</p>
        </div>
    );
};