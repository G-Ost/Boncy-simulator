import React, { useRef, useContext } from "react";
import image from "./mario2.png";
// import image from "./block.png";
import { BoardContext } from "../BoardContext"
function Ball(props) {
    const board = useContext(BoardContext).board;
    const squareSize = useContext(BoardContext).squareSize;
    const ballElement = useRef(null);

    let translationVector = [1, 1];

    function setTranslate(xPos, yPos, t, el) {
        el.style.transform = ` translate3d(${xPos}px, ${yPos}px, 0) `;
        el.style.transition = ` ${t}s linear`;
    };

    function randomizeTranslation(oldVector) {
        let newVector = [...oldVector];
        while (newVector[0] === oldVector[0] && newVector[1] === oldVector[1]) {
            let randomSeed1 = Math.floor(Math.random() * 2);
            let randomSeed2 = Math.floor(Math.random() * 2);
            let options = [-1, 1];
            newVector[0] = newVector[0] * options[randomSeed1];
            newVector[1] = newVector[1] * options[randomSeed2];
        }
        return newVector;
    }
    let counter = 0;
    function ballMovement(currentRow, currentColumn) {

        counter++;
        let transitionTime = 0.1;
        if (board[currentRow][currentColumn] === "Y") {
            translationVector = randomizeTranslation(translationVector);
        }
        if (board[currentRow][currentColumn + translationVector[0]] === "X") {
            translationVector[0] = translationVector[0] * (-1);
        }
        if (board[currentRow + translationVector[1]][currentColumn] === "X") {
            translationVector[1] = translationVector[1] * (-1);
        }
        if (board[currentRow + translationVector[1]][currentColumn + translationVector[0]] === "X") {
            translationVector[1] = translationVector[1] * (-1);
            translationVector[0] = translationVector[0] * (-1);
        }

        let newColumn = currentColumn + translationVector[0];
        let newRow = currentRow + translationVector[1];
        setTranslate((newColumn - props.columnNumber) * squareSize, (newRow - props.rowNumber) * squareSize, transitionTime, ballElement.current);
        // if (newRow === 1 && newColumn === 1) {
        //     return
        // }
        if (counter === 2000) {
            return;
        }
        setTimeout(() => {
            ballMovement(newRow, newColumn);
        }, transitionTime * 1000)

    }



    return (
        <img ref={ballElement} onClick={() => { ballMovement(props.rowNumber, props.columnNumber) }} src={image} alt="ball" width={squareSize} height={squareSize} id="ball"></img>
    )


}

export default Ball;