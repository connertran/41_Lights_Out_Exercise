import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
    <div className="App">
      <h1>Lights Out Game</h1>
      <Board nrows={3} ncols={3} chanceLightStartsOn={0.4} />
    </div>
  );
}

export default App;
