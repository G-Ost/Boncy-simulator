import Tile from "../components/Tile"
import { BoardContext } from "../BoardContext"
import React, { useContext } from "react";
import Ball from "../components/Ball"
function TileRow(props) {
    const squareSizeGiven = useContext(BoardContext).squareSize;
    let width = squareSizeGiven * props.boardRow.length + "px";
    let height = squareSizeGiven + "px";
    return (
        <>
            <div className="tileRow" style={{ width: width, height: height }}>
                {props.boardRow.map((val, index) => {
                    if (val === "1") {
                        return (
                            <Ball columnNumber={index} rowNumber={props.rowIndex} key="ball"></Ball>
                        )
                    }
                    else if (val === "X") {
                        return (
                            <Tile key={"Tile" + index.toString()} blockType={"border"}></Tile>
                        )
                    }
                    else if (val === "0" || val === "1") {
                        return (
                            <Tile key={"Tile" + index.toString()} blockType={"movement"}></Tile>
                        )
                    }
                    else {
                        return (
                            <Tile key={"Tile" + index.toString()} blockType={"portal"}></Tile>
                        )
                    }
                })}
            </div>

        </>
    )
}


export default TileRow;