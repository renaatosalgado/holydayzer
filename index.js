import express from "express";
import { isTodayHoliday } from "./isTodayHoliday.js";
import { holidays } from "./holidays.js";

const server = express();

server.listen(5000);

server.get("/holidays/:holidayId", (req, res) => {
  const holidayId = req.params.holidayId;
  let monthHolidays = [];

  for (let i = 0; i < holidays.length; i++) {
    if (holidays[i].month === holidayId) {
      monthHolidays.push(holidays[i]);
    }
  }
  if (monthHolidays.length === 0) {
    res.send("Infelizmente, esse mês não tem feriados.");
  } else {
    res.send(monthHolidays);
  }
});

server.get("/holidays", (req, res) => {
  res.send(holidays);
});

server.get("/is-today-holiday", (req, res) => {
  res.send(isTodayHoliday());
});
