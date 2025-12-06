import { countFreshIngredients } from './countFreshIngredients';

describe('countFreshIngredients', () => {
  it('should return 0 if none are in range of fresh ingredients', () => {
    const input = `
    1-2

    5
    8
    11
    17
    32
    `;
    const result = countFreshIngredients(input);
    expect(result).toBe(0);
  });
  it('should count fresh ingredients in a range of all fresh ingredients', () => {
    const input = `
    1-10

    2
    3
    5
    7
    `;
    const result = countFreshIngredients(input);
    expect(result).toBe(4);
  });
  it('should count fresh ingredients in multiple ranges', () => {
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
    const result = countFreshIngredients(input);
    expect(result).toBe(3);
  });
});
