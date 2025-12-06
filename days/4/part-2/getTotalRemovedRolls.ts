import { getAccessibleRolls } from '../part-1/getAccessibleRolls';

const getRollsString = (rollsArray: string[][]): string => {
  return rollsArray.map((row) => row.join('')).join('\n');
};

const countRemovedRolls = (rollsString: string): number => {
  return rollsString.split('').filter((char) => char === 'x').length;
};

export const getTotalRemovedRolls = (input: string) => {
  const { totalAccessibleRolls, accessibleRollsArray } =
    getAccessibleRolls(input);
  let accessibleRolls = totalAccessibleRolls;
  let rollsString = getRollsString(accessibleRollsArray);
  let totalRemovedRolls = countRemovedRolls(rollsString);
  while (accessibleRolls > 0) {
    const { totalAccessibleRolls, accessibleRollsArray } =
      getAccessibleRolls(rollsString);
    accessibleRolls = totalAccessibleRolls;
    rollsString = getRollsString(accessibleRollsArray);
    totalRemovedRolls += totalAccessibleRolls;
  }
  return totalRemovedRolls;
};
