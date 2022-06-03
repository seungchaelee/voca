import React from "react";
import { useNavigate } from "react-router";
import useFetch from "../hooks/useFetch";

export default function CreateDay() {
  const days = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();

  async function addDay() {
    const res = await fetch(`http://localhost:3001/days/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1
      }),
    });

    if (res.ok) {
      alert(`${days.length + 1}일 생성 완료`);
      navigate('/');
    }
    const data = await res.json();

    return data;
  }

  return (
    <>
      <h3>현재 일수 {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </>
  );
}
