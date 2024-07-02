import { createBrowserRouter } from "react-router-dom";
import App from "@/views/App.tsx";
import MyTicTacToe from "@/views/my-tic-tac-toe/MyTicTacToe.tsx";
import UseStateDemo from "@/views/use-state-demo/UseStateDemo.tsx";
import UseReducerDemo from "@/views/use-reducer-demo/UseReducerDemo.tsx";
import ComplexUseState from "@/views/use-reducer-demo/ComplexUseState.tsx";
import UseContextDemo from "@/views/use-context-demo/UseContextDemo.tsx";
import ReduxDemo from "@/views/redux-demo/ReduxDemo.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
          path: "/",
          element: <MyTicTacToe />,
        },
        {
          path: "/use-state-demo",
          element: <UseStateDemo />,
        },
        {
          path: "/use-reducer-demo",
          element: <UseReducerDemo />,
        },
        {
          path: "/complex-use-state",
          element: <ComplexUseState />,
        },
        {
          path: "/use-context-demo",
          element: <UseContextDemo />,
        },
        {
          path: "/redux-demo",
          element: <ReduxDemo />,
        },
    ],
  },
]);
