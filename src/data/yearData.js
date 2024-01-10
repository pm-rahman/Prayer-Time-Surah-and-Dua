import decemberData from "./monthData.js/decemberData";
import februaryData from "./monthData.js/februaryData";
import januaryData from "./monthData.js/januaryData";

const yearData = {
  _id: 1,
  year: "2024",
  months: [
    {
      _id: "1",
      monthName: "জানুয়ারী",
      monthData: januaryData,
    },
    {
      _id: "2",
      monthName: "ফেব্রুয়ারি",
      monthData: februaryData,
    },
    {
      _id: "12",
      monthName: "ডিসেম্বর",
      monthData: decemberData,
    },
  ],
};

export default yearData;
