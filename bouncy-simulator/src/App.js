import './App.css';
import TileBoard from "./conteners/TileBoard"
import React, { useContext } from "react";
import { BoardContext } from "./BoardContext"

function App() {

  const { board, squareSize } = useContext(BoardContext);
  const boardHorizontalPosition = window.innerWidth / 2 - board[0].length * squareSize / 2 + "px"
  const boardVerticalPosition = window.innerHeight / 2 - board.length * squareSize / 2 + "px";



  return (
    <div style={{ position: "absolute", left: boardHorizontalPosition, top: boardVerticalPosition }}>
      <TileBoard> </TileBoard>
    </div >
  );
}

export default App;
