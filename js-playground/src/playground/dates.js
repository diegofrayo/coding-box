const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

function main() {
  createDates();
  createUTCDates();

  console.log(
    "difference:",
    difference(new Date("2022/12/30"), new Date(), "day")
  );
  console.log("add:", add(new Date(), 1, "day").format());
  console.log("getDetails:", getDetails());
}

main();

// --- Utils ---

function createDates(params) {
  console.log(dayjs());
  console.log(dayjs().format());
  console.log(dayjs("2018-04-04T16:00:00.000Z").format());
  console.log(dayjs("2018-04-13 19:18:17.040+02:00").format());
  console.log(dayjs("2018-04-13 19:18").format());
  console.log(dayjs(new Date().getTime()).format());
  console.log(dayjs(new Date()).format());
}

function createUTCDates() {
  console.log("default local time:", dayjs().format()); //2019-03-06T17:11:55+08:00
  console.log("UTC mode:", dayjs.utc().format()); // 2019-03-06T09:11:55Z
  console.log(
    "convert local time to UTC time:",
    dayjs()
      .utc()
      .format()
  ); // 2019-03-06T09:11:55Z
}

function difference(date1, date2, unit) {
  return dayjs(date1).diff(dayjs(date2), unit);
}

function add(date1, value, unit) {
  return dayjs(date1).add(value, unit);
}

function getDetails() {
  const date = dayjs()
    .hour(12)
    .year(2000);

  return {
    ms: date.valueOf(),
    hour: date.hour(),
    minute: date.minute(),
    second: date.second(),
    year: date.year(),
    month: date.month() + 1,
    day: date.day()
  };
}
