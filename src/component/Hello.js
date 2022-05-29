import React, { useState } from "react";
import UserName from "./UserName";

export default function Hello(props) {
  const [name, setName] = useState("LEE");
  const [age, setAge] = useState(props.age);
  const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";

  const showAge = (math) => {
    console.log(math);
    console.log(age + 1);
  }

  function showText(e) {
    console.log(`First Input : ${e.target.value}`);
  }

  return (
    <>
      <UserName nameTODO={name} />
      <h2 id="name">
        {name} {age}살 : {msg}
      </h2>
      <button onClick={() => {
        setName(name === "LEE" ? "SeungCahe" : "LEE");
      }}>Change name</button>
      <button onClick={() => {
        showAge(Math.random() * 100);
        setAge(age + 1);
      }}>
        Add age
      </button>
      <input type="text" placeholder="First Value Input" onChange={showText} />
      <input type="text" placeholder="Second Value Input" onKeyPress={(e) => {
        if (e.key === "Enter") {
          console.log(`Second Input : ${e.target.value}`);
        }
      }} />
      <input type="datetime-local" onChange={(e) => {
        console.log(e.target.value);
      }} />
      <input type="range" step="any" onChange={(e) => {
        setTimeout(() => {
          console.log(`value : ${e.target.value}%`);
        }, 750);
      }} />
    </>
  );
}
