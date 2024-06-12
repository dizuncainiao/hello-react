import React from "react";
import ReactDOM from "react-dom/client";
// import MyTicTacToe from "./views/my-tic-tac-toe/MyTicTacToe.tsx";
import UseStateDemo from "./views/use-state-demo/UseStateDemo.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UseStateDemo />
  </React.StrictMode>,
);
