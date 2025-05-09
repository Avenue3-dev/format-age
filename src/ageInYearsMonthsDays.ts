/* eslint-disable no-param-reassign */
import { isDate } from './isDate';

export const ageInYearsMonthsDays = (
  dob: string | Date,
  now?: string | Date
) => {
  if (typeof dob === 'string') {
    dob = new Date(dob);
  }

  if (typeof dob === 'undefined' || isDate(dob) === false) {
    throw Error('Given date of birth is undefined or invalid');
  }

  // If `now` is not specified, use the current time.
  if (typeof now === 'undefined' || now === '') {
    now = new Date();
  }
  if (typeof now === 'string') {
    now = new Date(now);
    if (isDate(now) === false) {
      throw Error('Given reference date is undefined or invalid');
    }
  }
  // Get the number of days in a specific month.
  const daysInMonth = (iMonth: number, iYear: number) => {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  };

  // Calculate calendar age. This is complex because years and months are not constant lengths.
  const yearNow = now.getFullYear();
  const monthNow = now.getMonth();
  const dateNow = now.getDate();

  let yearAge = yearNow - dob.getFullYear();
  let monthAge = monthNow - dob.getMonth();
  let dateAge = dateNow - dob.getDate();

  if (dateAge < 0) {
    monthAge -= 1;
    const prevMonth = monthNow === 0 ? 11 : monthNow - 1;
    const prevMonthYear = monthNow === 0 ? yearNow - 1 : yearNow;
    dateAge += daysInMonth(prevMonth, prevMonthYear);
  }

  if (monthAge < 0) {
    yearAge -= 1;
    monthAge += 12;
  }

  return {
    years: yearAge,
    months: monthAge,
    days: dateAge,
  };
};
