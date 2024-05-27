import { CalendarDays } from "lucide-react";
import React from "react";

const DateCreateNews = ({ date = "27/5/2024", className = "text-[16px]" }) => {
  return (
    <div className="flex items-center gap-x-2">
      <CalendarDays color="#C2BDBA" />
      <span className={`text-text3 block  ${className}`}>{date}</span>
    </div>
  );
};

export default DateCreateNews;
