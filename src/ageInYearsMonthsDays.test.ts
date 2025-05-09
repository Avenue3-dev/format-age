import { vi, describe, expect, it, beforeEach } from 'vitest';
import { ageInYearsMonthsDays } from './ageInYearsMonthsDays';

describe('ageInYearsMonthsDays', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('should return the correct age in years, months, weeks, days, and hours', () => {
    // Arrange
    vi.setSystemTime(new Date('2021-01-01T00:00:00.000Z'));
    const dateOfBirth = new Date('2000-01-01T00:00:00.000Z');

    // Act
    const result = ageInYearsMonthsDays(dateOfBirth);

    // Assert
    expect(result.days).toBe(0);
    expect(result.months).toBe(0);
    expect(result.years).toBe(21);
  });
});
