import React from "react";
import ReactDOM from "react-dom/client";
import MyTicTacToe from "./views/MyTicTacToe.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MyTicTacToe />
  </React.StrictMode>,
);
