import { getTotalOutputJoltage } from './getTotalOutputJoltage';
import { puzzleInput } from '../puzzle-input';

describe('getTotalOutputJoltage', () => {
  it('should calculate the total output joltage from multiple battery banks', () => {
    const input = `
    987654321111111
    811111111111119
    234234234234278
    818181911112111
    `;
    const totalOutputJoltage = getTotalOutputJoltage(input);
    expect(totalOutputJoltage).toBe(357);
  });
  it('should solve the challenge input', () => {
    const input = puzzleInput;
    const totalOutputJoltage = getTotalOutputJoltage(input);
    expect(totalOutputJoltage).toBe(17405);
  });
});
