import moment from "moment";
import { Locales } from "../facts/locales";

// const Months = ["January", "February", "March","April", "May", "June", "July","August","September","October","November","December"];

const getDateFormatOptions = () => ({
  day: "numeric",
  month: "long",
  year: "numeric",
});

const getDateFormatWithoutYearOptions = () => ({
  day: "numeric",
  month: "long",
});
export const getXDaysFutureDateByStartDate = (startDate, days) =>{
  const start = new Date(startDate);
  return  new Date(start.getTime() + days * 24 * 60 * 60 * 1000);
}

export const getXDaysFutureDate = (days) =>
  new Date(Date.now() + days * 24 * 60 * 60 * 1000);

export const formatDate = (date) =>
  date
    ? moment(date)
        .parseZone()
        .toDate()
        .toLocaleDateString(Locales.EN_US, {
          timeZone: "UTC",
          ...getDateFormatOptions(),
        })
    : "";

export const formatDateWithoutYear = (date) =>
  date
    ? moment(date)
        .parseZone()
        .toDate()
        .toLocaleDateString(Locales.EN_US, {
          timeZone: "UTC",
          ...getDateFormatWithoutYearOptions(),
        })
    : "";
