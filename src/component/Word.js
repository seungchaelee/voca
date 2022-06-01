import React, { useState } from "react";

export default function Word({ words }) {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(words.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  const toggleDone = () => {
    setIsDone(!isDone);
  }

  return (
    <>
      <tr className={isDone ? "off" : ""}>
        <td>
          <input type="checkbox" checked={isDone} onChange={toggleDone} />
        </td>
        <td>{words.eng}</td>
        <td>{isShow && words.kor}</td>
        <td>
          <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
          <button className="btn_del">삭제</button>
        </td>
      </tr>
    </>
  );
}
