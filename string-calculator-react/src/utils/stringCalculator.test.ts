import { add } from './stringCalculator';

describe('String Calculator', () => {
  test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('returns number for a single number string', () => {
    expect(add("1")).toBe(1);
  });

  test('returns sum for two comma-separated numbers', () => {
    expect(add("1,2")).toBe(3);
  });

  test('returns sum for multiple numbers', () => {
    expect(add("1,2,3")).toBe(6);
  });

  test('handles newlines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('supports custom delimiter', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test('throws error for negative numbers', () => {
    expect(() => add("1,-2")).toThrow("negative numbers not allowed -2");
  });

  test('shows all negative numbers in error', () => {
    expect(() => add("-1,-2,3")).toThrow("negative numbers not allowed -1,-2");
  });
});
