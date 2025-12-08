import { readFileSync } from 'fs';
import { countPossiblePaths } from './countPossiblePaths';

describe('countPossiblePaths', () => {
  it('should return 1 when there are no splits', () => {
    const input = readFileSync('days/7/test-input-no-splits.txt', 'utf-8');
    const result = countPossiblePaths(input);
    expect(result).toBe(1);
  });
  it('should return 2 when there is a single split', () => {
    const input = readFileSync('days/7/test-input-single-split.txt', 'utf-8');
    const result = countPossiblePaths(input);
    expect(result).toBe(2);
  });
  it('should count the number of possible paths for the beam', () => {
    const input = readFileSync('days/7/test-input.txt', 'utf-8');
    const result = countPossiblePaths(input);
    expect(result).toBe(40);
  });
});
