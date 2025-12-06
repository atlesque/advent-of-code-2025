import { getMaxBankJoltage } from './getMaxBankJoltage';

export const getTotalOutputJoltage = (input: string): number => {
  const batteryBankArray = input
    .split('\n')
    .map((bank) => bank.trim())
    .filter((bank) => bank.length > 0);
  return batteryBankArray.reduce((totalJoltage, batteryBank) => {
    const maxBankJoltage = getMaxBankJoltage({
      batteryBankString: batteryBank,
      totalBatteries: 12,
    });
    return totalJoltage + maxBankJoltage;
  }, 0);
};
