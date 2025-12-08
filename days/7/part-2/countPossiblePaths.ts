const renderPascalsTriangle = (input: string): number[][] => {
  const beamArray = input
    .split('\n')
    .map((line) => line.split(''))
    // Remove every 2nd line (odd indices) from beamArray
    .filter((_, index) => index % 2 === 0);
  const beamStart = beamArray[0].indexOf('S');
  const pascalsTriangle: number[][] = Array.from(
    {
      length: beamArray.length,
    },
    () => Array.from({ length: beamArray[0].length }, () => 0),
  );
  pascalsTriangle[0][beamStart] = 1;
  for (let i = 1; i < beamArray.length; i++) {
    for (let j = 0; j < beamArray[i].length; j++) {
      const char = beamArray[i][j];
      const valueAbove = pascalsTriangle[i - 1][j];
      if (char === '^') {
        pascalsTriangle[i][j - 1] += valueAbove;
        pascalsTriangle[i][j + 1] += valueAbove;
      } else if (char === '.' && valueAbove > 0) {
        pascalsTriangle[i][j] += valueAbove;
      }
    }
  }
  return pascalsTriangle;
};

export const countPossiblePaths = (input: string): number => {
  const pascalsTriangle = renderPascalsTriangle(input);
  const totalPaths = pascalsTriangle[pascalsTriangle.length - 1].reduce(
    (acc, val) => acc + val,
    0,
  );
  return totalPaths;
};
