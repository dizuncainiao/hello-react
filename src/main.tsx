import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
// import MyTicTacToe from "./views/my-tic-tac-toe/MyTicTacToe.tsx";

// import UseStateDemo from "./views/use-state-demo/UseStateDemo.tsx";

// import UseReducerDemo from "./views/use-reducer-demo/UseReducerDemo.tsx";
// import ComplexUseState from "./views/use-reducer-demo/ComplexUseState.tsx";

import UseContextDemo from "./views/use-context-demo/UseContextDemo.tsx";

// import ReduxDemo from "./views/redux-demo/ReduxDemo.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <UseContextDemo />
    </Provider>
  </React.StrictMode>,
);
