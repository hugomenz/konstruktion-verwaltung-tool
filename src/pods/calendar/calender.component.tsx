import React, { useState, useEffect } from "react";
import { addDays, format, getDaysInMonth, getDay } from "date-fns";
import "./calender.component.css";

export const Calendar = () => {
  // Código anterior aquí...
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const daysInMonth = getDaysInMonth(new Date(currentYear, currentMonth));
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const firstDayOfWeek = getDay(firstDayOfMonth);
  useEffect(() => {
    // Carga el mes y el año actuales del calendario cuando el componente se monte
    setCurrentMonth(new Date().getMonth());
    setCurrentYear(new Date().getFullYear());
  }, []);

  function handlePreviousMonth() {
    // Retrocede un mes en el calendario
    setCurrentMonth(currentMonth - 1);
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    }
  }

  function handleNextMonth() {
    // Avanza un mes en el calendario
    setCurrentMonth(currentMonth + 1);
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    }
  }

  let currentDay = 1;
  let rows = [];

  for (let i = 0; i < 6; i++) {
    let days = [];

    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayOfWeek) {
        days.push("");
      } else if (currentDay > daysInMonth) {
        break;
      } else {
        const date = addDays(firstDayOfMonth, currentDay - 1);
        const formattedDate = format(date, "dd");
        days.push(<td key={formattedDate}>{formattedDate}</td>);
        currentDay++;
      }
    }

    rows.push(<tr key={i}>{days}</tr>);
  }

  return (
    <div className="calender-container">
      <button onClick={handlePreviousMonth}>PREV MONTH</button>
      <button onClick={handleNextMonth}>NEXT MONTH</button>
      <table>
        <thead>
          <tr>
            <th>Mo</th>
            <th>Di</th>
            <th>Mi</th>
            <th>Do</th>
            <th>Fr</th>
            <th>Sa</th>
            <th>So</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};
