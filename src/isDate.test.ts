import { describe, expect, it } from 'vitest';
import { isDate } from './isDate.js';
import { assertType } from './assertType.js';

describe('isDate', () => {
  it('returns true if the given value is a date object', () => {
    expect(isDate(new Date())).toBe(true);
  });

  it('returns true if the given value is an Invalid Date', () => {
    expect(isDate(new Date(NaN))).toBe(true);
  });

  it('ensures that the passed argument is an instance of Date', () => {
    const date: unknown = new Date();

    if (isDate(date)) {
      assertType<Date>(date);
    } else {
      assertType<unknown>(date);
    }
  });

  it('returns false if the given value is not a date object', () => {
    expect(!isDate(new Date().getTime())).toBe(true);
    expect(!isDate(new Date().toISOString())).toBe(true);
    expect(!isDate({})).toBe(true);
    expect(!isDate(null)).toBe(true);
    expect(!isDate(0)).toBe(true);
  });
});
