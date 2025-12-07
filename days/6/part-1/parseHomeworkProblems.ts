type Operator = '+' | '-' | '*' | '/';

export interface Problem {
  numbers: number[];
  operator: Operator;
}

export const parseHomeworkProblems = (input: string): Problem[] => {
  const lines = input.trim().split('\n').map(line => line.trim());
  const numbers: number[][] = [];
  for (let i = 0; i < lines.length - 1; i++) {
    const lineNumbers = lines[i].split(/\s+/).map(num => parseInt(num, 10));
    numbers.push(lineNumbers);
  }
  const operators = lines[lines.length - 1].split(/\s+/) as Operator[];
  const problems: Problem[] = [];
  for (let col = 0; col < operators.length; col++) {
    const problemNumbers: number[] = [];
    for (let row = 0; row < numbers.length; row++) {
      problemNumbers.push(numbers[row][col]);
    }
    problems.push({ numbers: problemNumbers, operator: operators[col] });
  }
  return problems;
};
