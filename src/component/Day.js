import React from "react";
import { useParams } from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";

export default function Day() {
  // const day = useParams().day;
  const { day } = useParams();
  // const wordList = mock.words.filter(word => word.day === Number(day));
  // const [words, setWords] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/words?day=${day}`)
  //   .then(res => {
  //     return res.json()
  //   })
  //   .then(data => {
  //     setWords(data);
  //   });
  // }, [day]);

  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && <Loading text="가져오는 중입니다" />}
      <table>
        <tbody>
          {words.map((word) =>
            <Word words={word} key={word.id} />
          )}
        </tbody>
      </table>
    </>
  );
}
