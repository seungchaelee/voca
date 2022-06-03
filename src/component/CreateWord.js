import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateWord() {
  const days = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();
  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(`Eng : ${engRef.current.value}`);
    // console.log(`Kor : ${korRef.current.value}`);
    // console.log(`Day : ${dayRef.current.value}`);

    const res = await fetch(`http://localhost:3001/words/`, {
      method: "POST",
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({
        day: dayRef.current.value,
        eng: engRef.current.value,
        kor: korRef.current.value,
        isDone: false
      }),
    });

    if (res.ok) {
      alert("생성 완료");
      navigate(`/day/${dayRef.current.value}`);
    }
    const data = await res.json();

    return data;
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>English</label>
        <input type="text" placeholder="English word" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Korea</label>
        <input type="text" placeholder="한글 뜻" ref={korRef} />
      </div>
      <div className="input_area">
        <select ref={dayRef}>
          {days.map(day =>
            <option key={day.id} value={day.day}>
              {`Day ${day.day}`}
            </option>
          )}
        </select>
      </div>
      <button>저장</button>
    </form>
  );
}
