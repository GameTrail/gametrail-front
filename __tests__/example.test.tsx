/* eslint-disable no-undef */
import 'jest-styled-components';
import '@testing-library/jest-dom';

const sum = (a: number, b: number) => a + b;

describe('sum', () => {
  it('should add two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
