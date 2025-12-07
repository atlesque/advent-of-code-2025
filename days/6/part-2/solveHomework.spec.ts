import { readFileSync } from 'fs';
import { solveHomework } from '../part-1/solveHomework';
import { parseHomeworkProblems } from './parseHomeworkProblems';

describe('solveHomework', () => {
  it('should solve the homework problems correctly', () => {
    const input = readFileSync('./days/6/part-2/test-input.txt', 'utf-8');
    const problems = parseHomeworkProblems(input);
    const result = solveHomework(problems);
    expect(result).toBe(3263827);
  });
  it('should solve the puzzle input correctly', () => {
    const input = readFileSync('./days/6/puzzle-input.txt', 'utf-8');
    const problems = parseHomeworkProblems(input);
    const result = solveHomework(problems);
    expect(result).toBe(8486156119946);
  });
});
