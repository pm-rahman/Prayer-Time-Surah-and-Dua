"use client";
import weekDay from "@/data/weekDayData";
import yearData from "@/data/yearData";
import React, { createContext, useEffect, useState } from "react";

export const TimeContext = createContext(null);
const TimeProvider = ({ children }) => {
  const [todayDayIndex, setTodayDayIndex] = useState(0);
  const [todayDate, setTodayDate] = useState();
  const [monthIndex, setMonthIndex] = useState(0);
  const [todayData, setTodayData] = useState({});
  const [dayName, setDayName] = useState("");

  useEffect(() => {
    const currentDate= new Date();

    const todayDayIndex = new Date(currentDate.toLocaleString('en-US',{timeZone:'Asia/Dhaka'})).getDay();

    const todayDate = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Dhaka',
      month: '2-digit',
      day: '2-digit',
      hour12: true,
    }).format(currentDate).split('/').reverse().join('-');

    const monthIndex = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Dhaka',
      month: 'numeric',
      hour12: true,
    }).format(currentDate).split('/').reverse().join('-')-1;
    const dayName = weekDay.find(
      (day, index) => (todayDayIndex===index&&day?.day)
    );

    const todayData = yearData?.months[monthIndex]?.monthData.find(
      (day) => day.date === todayDate
      );
      
    // set values
    setTodayDayIndex(todayDayIndex);
    setTodayDate(todayDate);
    setMonthIndex(monthIndex);
    setDayName(dayName?.day)
    setTodayData(todayData);
  }, []);

  const timeSchedule = todayData?.timeSchedule;

  const data = {
    todayDayIndex,
    todayDate,
    dayName,
    timeSchedule,
    monthIndex,
    todayData,
  };
  return <TimeContext.Provider value={data}>{children}</TimeContext.Provider>;
};

export default TimeProvider;
