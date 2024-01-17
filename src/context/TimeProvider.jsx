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
    const todayDayIndex = new Date().getDay();
    const todayDate = new Date()
      ?.toISOString()
      ?.slice(5, 10)
      ?.split("-")
      ?.reverse()
      ?.join("-");
    const monthIndex = new Date()?.getMonth();
    const dayName = weekDay.find(
      (day, index) => todayDayIndex === index && day.day
    );
    const todayData = yearData?.months[monthIndex]?.monthData.find(
      (day) => day.date === todayDate
    );
    // values
    setTodayDayIndex(todayDayIndex);
    setTodayDate(todayDate);
    setMonthIndex(monthIndex);
    setDayName(dayName.day)
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
