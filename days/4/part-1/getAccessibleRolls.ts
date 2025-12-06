const getRollsArray = (input: string): string[][] => {
  const lines = input
    .trim()
    .split('\n')
    .map((line) => line.trim());
  const result: string[][] = Array.from({ length: lines.length }, () => []);
  for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    const chars = lines[lineIndex].split('');
    for (let charIndex = 0; charIndex < chars.length; charIndex++) {
      result[lineIndex][charIndex] = chars[charIndex];
    }
  }
  return result;
};

const isRollAccessible = (
  rollsArray: string[][],
  rowIndex: number,
  colIndex: number,
): boolean => {
  if (rollsArray[rowIndex][colIndex] !== '@') {
    return false;
  }
  const surroundingCells = {
    n: rollsArray[rowIndex - 1]?.[colIndex] ?? null,
    ne: rollsArray[rowIndex - 1]?.[colIndex + 1] ?? null,
    e: rollsArray[rowIndex]?.[colIndex + 1] ?? null,
    se: rollsArray[rowIndex + 1]?.[colIndex + 1] ?? null,
    s: rollsArray[rowIndex + 1]?.[colIndex] ?? null,
    sw: rollsArray[rowIndex + 1]?.[colIndex - 1] ?? null,
    w: rollsArray[rowIndex]?.[colIndex - 1] ?? null,
    nw: rollsArray[rowIndex - 1]?.[colIndex - 1] ?? null,
  };
  const totalSurroundingRolls = Object.values(surroundingCells).filter(
    (roll) => roll === '@',
  ).length;
  const maxSurroundingRolls = 3;
  return totalSurroundingRolls <= maxSurroundingRolls;
};

export const getAccessibleRolls = (input: string) => {
  const rollsArray = getRollsArray(input);
  let totalAccessibleRolls = 0;
  for (let rowIndex = 0; rowIndex < rollsArray.length; rowIndex++) {
    const row = rollsArray[rowIndex];
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      if (isRollAccessible(rollsArray, rowIndex, colIndex)) {
        totalAccessibleRolls++;
      }
    }
  }
  return totalAccessibleRolls;
};
