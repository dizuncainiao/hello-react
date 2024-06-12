import { useState } from "react";

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log(count, "line 7");
    setCount(count + 1);
    console.log(count, "line 9");
    // x10000000
    console.log(count, "line 9");
  }

  return (
    <>
      <div>count is: {count}</div>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}
