import { puzzleInput } from '../puzzle-input';
import { parseHomeworkProblems, Problem } from './parseHomeworkProblems';
import { solveHomework } from './solveHomework';

describe('solveHomework', () => {
  it('should solve the homework problems correctly', () => {
    const problems: Problem[] = [
      { numbers: [123, 45, 6], operator: '*' },
      { numbers: [328, 64, 98], operator: '+' },
      { numbers: [51, 387, 215], operator: '*' },
      { numbers: [64, 23, 314], operator: '+' },
    ];
    const result = solveHomework(problems);
    expect(result).toBe(4277556);
  });
  it('should solve the puzzle input correctly', () => {
    const input = puzzleInput;
    const problems = parseHomeworkProblems(input);
    const result = solveHomework(problems);
    expect(result).toBe(4951502530386);
  });
});
