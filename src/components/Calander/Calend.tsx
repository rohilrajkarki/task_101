import React, { useState } from "react";

const Calend = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear(); // i.e 2025
  const month = currentDate.getMonth(); //eg: 0=Jan, 1 =Feb here 1

  const firstDay = new Date(year, month, 1).getDay(); //i.e: 0=Sun,1=monday
  const lastDate = new Date(year, month + 1, 0); // 0th day of the month i.e last day of next month
  console.log(month, firstDay, lastDate);
};
export default Calend;
