import { useState } from "react";

export default function Counter() {
    // 声明一个新的状态变量`count`，并设置其初始值为0
    const [count, setCount] = useState(0);

    // 当按钮被点击时，更新`count`的值
    const increment = () => setCount(count + 1);

    return (
        <>
            <div>count is: {count}</div>
            <button onClick={increment}>Click Me</button>
        </>
    );
}
