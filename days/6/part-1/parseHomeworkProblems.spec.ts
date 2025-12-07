import { parseHomeworkProblems } from './parseHomeworkProblems';

describe('parseHomeworkProblems', () => {
  it('should parse problems from the input string', () => {
    const input = `
    123 328  51 64
     45 64  387 23
      6 98  215 314
    *   +   *   +
    `;
    const expectedOutput = [
      { numbers: [123, 45, 6], operator: '*' },
      { numbers: [328, 64, 98], operator: '+' },
      { numbers: [51, 387, 215], operator: '*' },
      { numbers: [64, 23, 314], operator: '+' },
    ];

    const result = parseHomeworkProblems(input);
    expect(result).toEqual(expectedOutput);
  });
});
