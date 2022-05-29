import React from "react";
import { Link } from "react-router-dom";
import dummy from "../db/data.json";

export default function DayList() {
  return (
    <ul className="list_day">
      {dummy.days.map((dayNumber) =>
        <li key={dayNumber.id}>
          <Link to={`/day/${dayNumber.day}`}>Day {dayNumber.day}</Link>
        </li>
      )}
    </ul>
  );
}
