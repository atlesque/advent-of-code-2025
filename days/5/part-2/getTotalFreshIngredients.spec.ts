import { puzzleInput } from '../puzzle-input';
import { getTotalFreshIngredients } from './getTotalFreshIngredients';

describe('getTotalFreshIngredients', () => {
  it('should count all fresh ingredients in a single range', () => {
    const input = `
    1-10

    1
    `;
    const result = getTotalFreshIngredients(input);
    expect(result).toBe(10);
  });
  it('should count all fresh ingredients in separate ranges', () => {
    const input = `
    1-10
    21-30

    1
    15
    `;
    const result = getTotalFreshIngredients(input);
    expect(result).toBe(20);
  });
  it('should only count ingredients once if ranges overlap completely', () => {
    const input = `
    1-10
    5-9

    1
    `;
    const result = getTotalFreshIngredients(input);
    expect(result).toBe(10);
  });
  it('should only count ingredients once if ranges overlap completely in reverse', () => {
    const input = `
    5-9
    1-10

    1
    `;
    const result = getTotalFreshIngredients(input);
    expect(result).toBe(10);
  });
  it('should count all fresh ingredients in all ranges', () => {
    const input = `
    3-5
    10-14
    16-20
    12-18

    1
    5
    8
    11
    17
    32
    `;
    const result = getTotalFreshIngredients(input);
    expect(result).toBe(14);
  });
  it('should solve the puzzle input', () => {
    const input = puzzleInput;
    const result = getTotalFreshIngredients(input);
    expect(result).toBe(355555479253787);
  });
});
