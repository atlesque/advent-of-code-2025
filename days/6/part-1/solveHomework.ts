import { Problem } from './parseHomeworkProblems';

export const solveHomework = (problems: Problem[]): number => {
  let result = 0;
  for (const problem of problems) {
    const { numbers, operator } = problem;
    switch (operator) {
      case '+':
        result += numbers.reduce((a, b) => a + b, 0);
        break;
      case '-':
        result += numbers.reduce((a, b) => a - b);
        break;
      case '*':
        result += numbers.reduce((a, b) => a * b, 1);
        break;
      case '/':
        result += numbers.reduce((a, b) => a / b);
        break;
      default:
        throw new Error(`Unknown operator: ${operator}`);
    }
  }
  return result;
};
