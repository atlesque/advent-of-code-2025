export const renderBeamPath = (input: string): string[][] => {
  const beamArray = input.split('\n').map((line) => line.split(''));
  const beamStart = beamArray[0].indexOf('S');
  // Add initial beam going down
  beamArray[1][beamStart] = '|';
  for (let i = 2; i < beamArray.length; i++) {
    for (let j = 0; j < beamArray[i].length; j++) {
      const char = beamArray[i][j];
      const charAbove = beamArray[i - 1][j];
      if (charAbove === '|' && char === '.') {
        // Continue beam downwards
        beamArray[i][j] = '|';
      } else if (charAbove === '|' && char === '^') {
        // Add beams to left and right of splitter
        beamArray[i][j - 1] = '|';
        beamArray[i][j + 1] = '|';
        // Add beams going down-left and down-right
        beamArray[i + 1][j - 1] = '|';
        beamArray[i + 1][j + 1] = '|';
        // Skip next character since it's a beam we just added
        j++;
      }
    }
  }
  return beamArray;
};

export const countBeamSplits = (input: string): number => {
  const beamPath = renderBeamPath(input);
  let splitCount = 0;
  for (let i = 2; i < beamPath.length; i++) {
    for (let j = 0; j < beamPath[i].length; j++) {
      const char = beamPath[i][j];
      const charAbove = beamPath[i - 1][j];
      if (char === '^' && charAbove === '|') {
        splitCount++;
      }
    }
  }
  return splitCount;
};
