import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { Tile } from "../Tile";
import { useGame } from "../contexts/game.context";

export const Map = () => {
    const { map } = useGame();
    const tilesList = () => {
        return map.map(t => <Tile key={t._id} item={t} />)
    };
    return (
        <TransformWrapper
            initialScale={1}
            minScale={0.25}
            maxScale={2}
            centerOnInit
            panning={{
                allowRightClickPan: true,
                allowLeftClickPan: false,
            }}
            doubleClick={{
                disabled: true,
            }}
        >
            <TransformComponent wrapperStyle={{ width: '100vw', height: '100vh' }}>
                <div className="map">
                    {tilesList()}
                </div>
            </TransformComponent>
        </TransformWrapper>
    );
};