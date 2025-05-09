/* eslint-disable no-param-reassign */
import { ageInYearsMonthsDays } from './ageInYearsMonthsDays';

export const formatAge = (
  dob: Date | string,
  refDate?: Date | string
): string => {
  let now = refDate || new Date();

  const ageValues = ageInYearsMonthsDays(dob, now);
  const yearAge = ageValues.years;
  const monthAge = ageValues.months;
  const dateAge = ageValues.days;

  // Adults (over 18 years): **years**.
  if (yearAge >= 18) {
    return `${yearAge}y`;
  }

  // Children over two years: **years and months**.
  if (yearAge >= 2) {
    return `${yearAge}y${monthAge ? ` ${monthAge}m` : ''}`;
  }
  // Children 12 to 24 months: **months and days**.
  if (yearAge === 1) {
    return `${12 + monthAge}m${dateAge ? ` ${dateAge}d` : ''}`;
  }
  // Calculate age measured in simple units.
  if (typeof dob === 'string') {
    dob = new Date(dob);
  }
  if (typeof now === 'string') {
    now = new Date(now);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const age = (now as any) - (dob as any);
  const hourAge = Math.floor(age / (1000 * 60 * 60));
  let dayAge = Math.floor(hourAge / 24);
  const weekAge = Math.floor(dayAge / 7);

  // Children four weeks to one year: **weeks and days**.
  if (weekAge >= 4) {
    dayAge -= weekAge * 7;
    return `${weekAge}w${dayAge ? ` ${dayAge}d` : ''}`;
  }

  // Children two days to four weeks: **days**.
  if (dayAge >= 2) {
    return `${dayAge}d`;
  }

  // Children two to 24 hours: **hours**.
  if (hourAge >= 2) {
    return `${hourAge}hrs`;
  }

  // Children under two hours: **minutes**.
  return `${Math.floor(age / (1000 * 60))}mins`;
};
