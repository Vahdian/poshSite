import React from "react";

export default function CurrentDateComponent() {
  const date = new Date();
  const day = date.getDate().toString();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = (date.getYear() + 1900).toString();
  const week = date.toLocaleString("en-US", { weekday: "long" });
  console.log(week);
  return (
    <div className="date">
      {week + ", " + day + " of " + month + " " + year}
    </div>
  );
}
