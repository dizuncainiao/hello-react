import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function dispatch(type: string) {
    switch (type) {
      case "add":
        setCount(count + 1);
        break;
      case "sub":
        setCount(count - 1);
        break;
      case "2x":
        setCount(count * 2);
        break;
      case "3x":
        setCount(count * 3);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <p>当前计数：{count}</p>
      <button onClick={() => dispatch("sub")}>click to - 1</button>{" "}
      <button onClick={() => dispatch("add")}>click to + 1</button>{" "}
      <button onClick={() => dispatch("2x")}>click to * 2</button>{" "}
      <button onClick={() => dispatch("3x")}>click to * 3</button>
    </div>
  );
}
