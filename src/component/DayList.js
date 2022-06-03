import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {
  // const [days, setDays] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3001/days')
  //   .then(res => {
  //     return res.json()
  //   })
  //   .then(data => {
  //     setDays(data);
  //   });
  // }, []);

  const days = useFetch("http://localhost:3001/days");

  return (
    <>
      <ul className="list_day">
        {days.map((dayNumber) =>
          <li key={dayNumber.id}>
            <Link to={`/day/${dayNumber.day}`}>Day {dayNumber.day}</Link>
          </li>
        )}
      </ul>
    </>
  );
}
