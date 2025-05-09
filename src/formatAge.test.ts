import { vi, describe, expect, it, beforeEach } from 'vitest';
import { formatAge } from './formatAge';

describe('formatAge', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2021-01-01T00:00:00.000Z'));
  });

  it('should return the correct age of adults, 18 years and older', () => {
    // Arrange
    const dateOfBirth = new Date('2000-01-01T00:00:00.000Z');

    // Act
    const result = formatAge(dateOfBirth);

    // Assert
    expect(result).toBe('21y');
  });

  it('should return the correct age of children, 2 years', () => {
    // Arrange
    const dateOfBirth = new Date('2019-01-01T00:00:00.000Z');

    // Act
    const result = formatAge(dateOfBirth);

    // Assert
    expect(result).toBe('2y');
  });

  it('should return the correct age of children, 2 years and 2 months', () => {
    // Arrange
    const dateOfBirth = new Date('2018-11-01T00:00:00.000Z');

    // Act
    const result = formatAge(dateOfBirth);

    // Assert
    expect(result).toBe('2y 2m');
  });

  it('should return the correct age of children, 1 year', () => {
    // Arrange
    const dateOfBirth = new Date('2020-01-01T00:00:00.000Z');

    // Act
    const result = formatAge(dateOfBirth);

    // Assert
    expect(result).toBe('12m');
  });

  it('should return the correct age of children, 21 months and 29 days', () => {
    // Arrange
    const dateOfBirth = new Date('2019-03-03T00:00:00.000Z');

    // Act
    const result = formatAge(dateOfBirth);

    // Assert
    expect(result).toBe('21m 29d');
  });

  it('should return the correct age of children, less than 1 year', () => {
    // Arrange
    const dateOfBirth = new Date('2020-06-01T00:00:00.000Z');

    // Act
    const result = formatAge(dateOfBirth);

    // Assert
    expect(result).toBe('30w 4d');
  });

  it('should return the correct age of children, less than 4 weeks', () => {
    // Arrange
    const dateOfBirth = new Date('2020-12-06T00:00:00.000Z');

    // Act
    const result = formatAge(dateOfBirth);

    // Assert
    expect(result).toBe('26d');
  });

  it('should return the correct age of children, less than 2 days', () => {
    // Arrange
    const dateOfBirth = new Date('2020-12-31T00:00:00.000Z');

    // Act
    const result = formatAge(dateOfBirth);

    // Assert
    expect(result).toBe('24hrs');
  });

  it('should return the correct age of children, less than 2 hours', () => {
    // Arrange
    const dateOfBirth = new Date('2020-12-31T23:30:00.000Z');

    // Act
    const result = formatAge(dateOfBirth);

    // Assert
    expect(result).toBe('30mins');
  });
});
