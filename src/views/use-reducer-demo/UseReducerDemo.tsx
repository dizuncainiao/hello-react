import { useReducer } from "react";

const initialState = {
  count: 1,
};

function reducer(state: { count: number }, type: string) {
  switch (type) {
    case "add":
      return { count: state.count + 1 };
    case "sub":
      return { count: state.count - 1 };
    case "2x":
      return { count: state.count * 2 };
    case "3x":
      return { count: state.count * 3 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>当前计数：{state.count}</p>
      <button onClick={() => dispatch("sub")}>click to - 1</button>{" "}
      <button onClick={() => dispatch("add")}>click to + 1</button>{" "}
      <button onClick={() => dispatch("2x")}>click to * 2</button>{" "}
      <button onClick={() => dispatch("3x")}>click to * 3</button>
    </div>
  );
}
