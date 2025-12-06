import { puzzleInput } from '../puzzle-input';
import { getTotalOutputJoltage } from './getTotalOutputJoltage';

describe('getTotalOutputJoltage', () => {
  it('should calculate the total output joltage from multiple battery banks', () => {
    const input = `
    987654321111111
    811111111111119
    234234234234278
    818181911112111
    `;
    const totalOutputJoltage = getTotalOutputJoltage(input);
    expect(totalOutputJoltage).toBe(3121910778619);
  });
  it('should solve the challenge input', () => {
    const input = puzzleInput;
    const totalOutputJoltage = getTotalOutputJoltage(input);
    // TODO: Find right number, this one is not correct
    expect(totalOutputJoltage).toBe(169229007172898);
  });
});
