import { getTotalOutputJoltage } from './getTotalOutputJoltage';

describe('getTotalOutputJoltage', () => {
  it('should calculate the total output joltage from multiple battery banks', () => {
    const input = `
    987654321111111
    811111111111119
    234234234234278
    818181911112111
    `;
    const result = getTotalOutputJoltage(input);
    expect(result).toBe(357);
  });
});
