import React from "react";

export default function Hello() {
  const showName = () => {
    console.log("Lee");
  }
  function showAge(age) {
    console.log(age);
  }
  function showText(e) {
    console.log(e.target.value);
  }

  return (
    <>
      <h1>Hello world</h1>
      <h2>Component StateValue</h2>
      <button onClick={showName}>Show name</button>
      <button onClick={() => {
        showAge(Math.random() * 100);
      }}>
        Show age
      </button>
      <input type="text" onChange={showText} />
      <input type="text" onKeyPress={(e) => {
        if (e.key === "Enter") {
          console.log(e.target.value);
        }
      }} />
      <input type="datetime-local" onChange={(e) => {
        console.log(e.target.value);
      }} />
      <input type="range" onChange={(e) => {
        console.log(`value : ${e.target.value}%`);
      }}/>
    </>
  );
}
