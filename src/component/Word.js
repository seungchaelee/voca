import React, { useState } from "react";

export default function Word({ words: w }) {
  const [words, setWords] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(words.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  const toggleDone = async () => {
    // setIsDone(!isDone);
    const res = await fetch(`http://localhost:3001/words/${words.id}`, {
      method: "PUT",
      headers: {
        'content-Type' : 'application/json',
      },
      body: JSON.stringify({
        ...words,
        isDone: !isDone
      }),
    });

    if (res.ok) {
      setIsDone(!isDone);
    }
    const data = await res.json();

    return data;
  }

  async function del() {
    if(window.confirm('삭제 ?')) {
      const res = await fetch(`http://localhost:3001/words/${words.id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setWords({ id: 0 });
        alert('삭제 완료');
      }
      const data = await res.json();

      return data;
    }
  }

  if (words.id === 0) {
    return null;
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
          <button onClick={del} className="btn_del">삭제</button>
        </td>
      </tr>
    </>
  );
}
