import { getMaxBankJoltage } from './getMaxBankJoltage';

describe('getMaxBankJoltage', () => {
  it('should return the max joltage for a filled battery bank of batteries with 1 joltage', () => {
    const totalBatteries = 12;
    const batteryBankString = Array(totalBatteries).fill(1).join('');
    expect(getMaxBankJoltage({ batteryBankString, totalBatteries })).toBe(
      111111111111,
    );
  });

  it('should return the max joltage for a battery bank larger than total batteries', () => {
    const totalBatteries = 12;
    const batteryBankString = Array(totalBatteries + 1)
      .fill(1)
      .join('');
    expect(getMaxBankJoltage({ batteryBankString, totalBatteries })).toBe(
      111111111111,
    );
  });

  it('should return the max joltage for a bank starting with lower numbers', () => {
    const totalBatteries = 4;
    const batteryBankString = '11119';
    expect(getMaxBankJoltage({ batteryBankString, totalBatteries })).toBe(1119);
  });

  it('should return the max joltage for a bank starting with high numbers', () => {
    const totalBatteries = 4;
    const batteryBankString = '91111';
    expect(getMaxBankJoltage({ batteryBankString, totalBatteries })).toBe(9111);
  });

  it('should return the max joltage for a bank with 1 battery', () => {
    const totalBatteries = 1;
    const batteryBankString = '111191111';
    expect(getMaxBankJoltage({ batteryBankString, totalBatteries })).toBe(9);
  });

  it('should return the max joltage for a bank with 3 batteries', () => {
    const totalBatteries = 3;
    const batteryBankString = '987654321111111';
    expect(getMaxBankJoltage({ batteryBankString, totalBatteries })).toBe(987);
  });

  it.each([
    ['987654321111111', 987654321111],
    ['811111111111119', 811111111119],
    ['234234234234278', 434234234278],
    ['818181911112111', 888911112111],
  ])(
    'should return the max joltage %s for batteryBank %s',
    (batteryBank, expected) => {
      const result = getMaxBankJoltage({
        batteryBankString: batteryBank,
        totalBatteries: 12,
      });
      expect(result).toBe(expected);
    },
  );
});
