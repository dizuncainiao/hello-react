import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import MyTicTacToe from "./views/my-tic-tac-toe/MyTicTacToe.tsx";
// import UseStateDemo from "./views/use-state-demo/UseStateDemo.tsx";
import Counter from "./views/use-reducer-demo/UseReducerDemo.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
);
