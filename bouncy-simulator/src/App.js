import './App.css';
import TileBoard from "./conteners/TileBoard"
// import Ball from "./components/Ball"
import React, { useContext } from "react";
import { BoardContext } from "./BoardContext"

function App() {

  const board = useContext(BoardContext).board;
  const squareSize = useContext(BoardContext).squareSize;
  const boardHorizontalPosition = window.innerWidth / 2 - board[0].length * squareSize / 2 + "px"
  const boardVerticalPosition = window.innerHeight / 2 - board.length * squareSize / 2 + "px";



  return (
    <div style={{ position: "absolute", left: boardHorizontalPosition, top: boardVerticalPosition }}>

      <TileBoard> </TileBoard>
      {/* <Ball></Ball> */}
    </div >
  );
}

export default App;
