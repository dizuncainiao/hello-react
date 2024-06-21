import { useSelector, useDispatch } from "react-redux";
import {
  add,
  addNumber,
  subtract,
  addAsync,
  selectCountState,
} from "../../store/counterSlice.ts";
import { useState } from "react";
import "./index.less";

export default function ReduxDemo() {
  const count = useSelector(selectCountState);
  const dispatch = useDispatch();
  const [num, setNum] = useState(10);

  return (
    <>
      <div>
        <p>点击改变 count：{count}</p>
        <p>
          <button onClick={() => dispatch(subtract())}> 点击-1</button>
          <button onClick={() => dispatch(add())}> 点击+1</button>
        </p>
      </div>
      <div>
        <p>输入改变 count：{count}</p>
        <p>
          <input
            className="textbox"
            value={num}
            onChange={(e) => setNum(e.target.value as unknown as number)}
          />
          <button onClick={() => dispatch(addNumber(Number(num) || 0))}>
            确认
          </button>
          <button className="async-button" onClick={() => dispatch(addAsync(Number(num) || 0))}>
            异步执行
          </button>
        </p>
      </div>
    </>
  );
}
