import React, { useState } from "react";

const Calend = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay(); // First day of the month (0 = Sunday)
    const lastDate = new Date(year, month + 1, 0).getDate(); // Last date of the month
    const today = new Date();

    const days = [];

    // Empty slots before first day
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="empty"></div>);
    }

    // Days of the month
    for (let i = 1; i <= lastDate; i++) {
      const isToday =
        i === today.getDate() &&
        year === today.getFullYear() &&
        month === today.getMonth();

      days.push(
        <div key={i} className={`date ${isToday ? "today" : ""}`}>
          {i}
        </div>
      );
    }

    return days;
  };

  const prevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };

  console.log("date:", currentDate.getMonth(), currentDate, renderCalendar());
  return (
    <div className="calendar">
      <div className="header">
        <button onClick={prevMonth}>◀</button>
        <h3>
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h3>
        <button onClick={nextMonth}>▶</button>
      </div>
      <div className="days">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="dates">{renderCalendar()}</div>
    </div>
  );
};

export default Calend;
