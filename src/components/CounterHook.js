// 関数コンポーネント内でローカルstateを使えるようにするため、
// useStateをインポートする
import React, { useState } from "react";

function CounterHook() {
  // state宣言
  // state値と更新関数が返されるため、任意の名前をつける
  // 初期値に0
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const incrementCountTen = () => {
    for (let i = 0; i < 10; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      {/* ↓それぞれの値や関数を呼び出すのに、thisは不要 */}
      <h1>{count}</h1>
      <button onClick={incrementCount}>カウント +</button>
      <button onClick={incrementCountTen}>カウント 10 +</button>
    </div>
  );
}

export default CounterHook;
