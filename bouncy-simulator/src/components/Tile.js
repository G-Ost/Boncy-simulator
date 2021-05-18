import { BoardContext } from "../BoardContext"
import React, { useContext } from "react";
import image from "./block.png";
// import image from "./mario2.png";
import portalImage from "./Pipe.png";
function Tile(props) {

    const squareSize = useContext(BoardContext).squareSize + "px";
    // return <svg width={squareSize} height={squareSize} >
    //     <rect width={squareSize} height={squareSize} className={props.isBorder ? "borderTile" : "movementTile"} />
    // </svg>


    if (props.blockType === "border") {
        return <span width={squareSize} height={squareSize}  >
            <img src={image} alt="block" width={squareSize} height={squareSize} className="borderTile"></img>
        </span>
    }
    else if (props.blockType === "movement") {
        return <svg width={squareSize} height={squareSize} >
            <rect width={squareSize} height={squareSize} className="movementTile" />
        </svg>
    }
    else {
        return <span width={squareSize} height={squareSize}  >
            <img src={portalImage} alt="block" width={squareSize} height={squareSize} className="borderTile"></img>
        </span>
    }

}

export default Tile;