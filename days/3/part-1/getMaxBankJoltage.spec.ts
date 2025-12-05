import { getMaxBankJoltage } from './getMaxBankJoltage';

describe('getMaxBankJoltage', () => {
  it.each([
    ['987654321111111', 98],
    ['811111111111119', 89],
    ['234234234234278', 78],
    ['818181911112111', 92],
  ])(
    'should return the max joltage %s for batteryBank %s',
    (batteryBank, expected) => {
      const result = getMaxBankJoltage({ batteryBank });
      expect(result).toBe(expected);
    },
  );
});
