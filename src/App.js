import React from "react";

import AppBar from "components/AppBar/AppBar";
import BoardBar from "components/BoardBar/BoardBar";
import ContentBoard from "components/ContentBoard/ContentBoard";

import "./App.scss";

function App() {
  return (
    <div className="container-master">
      <AppBar />
      <BoardBar />
      <ContentBoard />
    </div>
  );
}

export default App;
