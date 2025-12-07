import { Operator, Problem } from '../part-1/parseHomeworkProblems';

const getCharArray = (input: string): string[][] => {
  const rows = input.split('\n');
  return rows.map((row) => row.split(''));
};

export const parseHomeworkProblems = (input: string): Problem[] => {
  const problems: Problem[] = [];
  const charArray = getCharArray(input);
  let numberGroup: number[] = [];
  for (let col = charArray[0].length - 1; col >= 0; col--) {
    let colString: string = '';
    let operator: Operator | null = null;
    for (let row = 0; row < charArray.length; row++) {
      const char = charArray[row][col];
      const num = parseInt(char);
      if (!isNaN(num)) {
        colString += char;
      } else if (char !== ' ') {
        operator = char as Operator;
      }
    }
    if (colString.length > 0) {
      numberGroup.push(parseInt(colString));
    }
    if (operator) {
      problems.push({
        numbers: numberGroup,
        operator,
      });
      numberGroup = [];
    }
  }
  return problems;
};
