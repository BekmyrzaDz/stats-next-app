"use client";
import { useState } from "react";
import BarChart from "./components/BarChart/BarChart";
import { data } from "./mockApi/mockApi";

enum SelectOptions {
  year = "За последний год",
  lastSixMonth = "За последние 6 месяцев",
  lastMonth = "За последний месяц",
}

export default function Home() {
  const { half_year, month, year } = data.finance.periods[0].graph;
  const selectValue = window.localStorage.getItem("selectValue");
  const [value, setValue] = useState<string>(selectValue || "");

  return (
    <>
      {value.toLowerCase() === SelectOptions.year.toLowerCase() ? (
        <BarChart data={year} setValue={setValue} value={value} />
      ) : value.toLowerCase() === SelectOptions.lastSixMonth.toLowerCase() ? (
        <BarChart data={half_year} setValue={setValue} value={value} />
      ) : (
        <BarChart data={month} setValue={setValue} value={value} />
      )}
    </>
  );
}
