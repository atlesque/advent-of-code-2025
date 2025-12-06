interface Props {
  batteryBankString: string;
  totalBatteries: number;
}

const parseBatteryBankString = (batteryBankString: string): number[] =>
  batteryBankString.split('').map((char) => parseInt(char, 10));

export const getMaxBankJoltage = ({
  batteryBankString,
  totalBatteries,
}: Props): number => {
  const batteryBank = parseBatteryBankString(batteryBankString);

  const selectedBatteries = [];
  let leftBound = 0;
  let rightBound = batteryBank.length - totalBatteries + 1;

  while (selectedBatteries.length < totalBatteries) {
    const range = batteryBank.slice(leftBound, rightBound);

    let biggestInRange = 0;
    for (let j = 0; j < range.length; j++) {
      if (range[j] > biggestInRange) {
        biggestInRange = range[j];
        leftBound = leftBound + Math.max(j, 1);
      }
    }
    selectedBatteries.push(biggestInRange);
    rightBound++;
  }

  const result = parseInt(selectedBatteries.join(''), 10);

  return result;
};
