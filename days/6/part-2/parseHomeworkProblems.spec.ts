import { readFileSync } from 'fs';
import { parseHomeworkProblems } from './parseHomeworkProblems';

describe('parseHomeworkProblems', () => {
  it('should parse problems from the input string', () => {
    const input = readFileSync('./days/6/part-2/test-input.txt', 'utf-8');
    const expectedOutput = [
      { numbers: [4, 431, 623], operator: '+' },
      { numbers: [175, 581, 32], operator: '*' },
      { numbers: [8, 248, 369], operator: '+' },
      { numbers: [356, 24, 1], operator: '*' },
    ];

    const result = parseHomeworkProblems(input);
    expect(result).toEqual(expectedOutput);
  });
});
