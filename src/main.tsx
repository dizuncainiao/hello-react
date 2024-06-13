import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import MyTicTacToe from "./views/my-tic-tac-toe/MyTicTacToe.tsx";
// import UseStateDemo from "./views/use-state-demo/UseStateDemo.tsx";
// import UseReducerDemo from "./views/use-reducer-demo/UseReducerDemo.tsx";
import UseContextDemo from "./views/user-context-demo/UseContextDemo.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UseContextDemo />
  </React.StrictMode>,
);
