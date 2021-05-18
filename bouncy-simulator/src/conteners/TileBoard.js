import TileRow from "./TileRow"
import React, { useContext } from "react";
import { BoardContext } from "../BoardContext"
function TileBoard() {
    const board = useContext(BoardContext).board;
    return (
        <>
            <div className="tileBoard">
                {board.map((value, index) => {
                    return <TileRow rowIndex={index} boardRow={value} key={"boardRow" + index.toString()}></TileRow>
                })}
            </div>

        </>
    )
}

export default TileBoard;