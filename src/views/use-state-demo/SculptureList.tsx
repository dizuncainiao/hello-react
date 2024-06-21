import { sculptureList } from "./data.ts";
import { useState } from "react";

export default function SculptureList() {
  // let index = 0;
  const [index, setIndex] = useState(0);

  console.log("重新加载了");

  const sculpture = sculptureList[index];

  function handleClick() {
    // index = index + 1;
    setIndex(index + 1);
    console.log(index, "index");
    console.log(sculpture, "sculpture");
  }

  return (
    <>
      <button disabled={index <= 0} onClick={() => setIndex(index - 1)}>
        Prev
      </button>
      <span>index: {index}</span>
      <button
        disabled={index >= sculptureList.length - 1}
        onClick={handleClick}
      >
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <p>{sculpture.description}</p>
    </>
  );
}
