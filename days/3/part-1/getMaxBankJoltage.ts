interface Props {
  batteryBank: string;
}

// Assume maxBatteries is always 2 for this implementation
export const getMaxBankJoltage = ({ batteryBank }: Props): number => {
  const joltageArray = batteryBank.split('').map((char) => parseInt(char, 10));
  // Sort the array in descending order and get the highest joltage excluding the last element
  const highestJoltageInArray = joltageArray
    .slice(0, -1)
    .sort((a, b) => b - a)[0];
  const highestJoltageIndex = joltageArray.indexOf(highestJoltageInArray);
  const batteriesAfterHighest = joltageArray.slice(highestJoltageIndex + 1);
  const secondHighestJoltageInArray = batteriesAfterHighest.sort(
    (a, b) => b - a,
  )[0];
  return parseInt(`${highestJoltageInArray}${secondHighestJoltageInArray}`, 10);
};
