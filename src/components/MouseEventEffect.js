import React, { useState, useEffect } from "react";

function MouseEventEffect() {
  console.log("MouseEventEffectが呼ばれました");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const getMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  // イベントの登録しかしていないので、初回レンダー時のみ実行すればよい
  // 第二引数に空の配列を入れる
  useEffect(() => {
    console.log("useEffectが呼ばれました");
    window.addEventListener("mousemove", getMousePosition);
  }, []);

  return (
    <div>
      <ul>
        <li>x座標:{x}</li>
        <li>y座標:{y}</li>
      </ul>
    </div>
  );
}

export default MouseEventEffect;
