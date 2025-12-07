import { readFileSync } from 'fs';
import { countBeamSplits } from './countBeamSplits';

describe('countBeamSplits', () => {
  it('should return 0 when no splits occur', () => {
    const input = readFileSync(
      'days/7/part-1/test-input-no-splits.txt',
      'utf-8',
    );
    const result = countBeamSplits(input);
    expect(result).toBe(0);
  });
  it('should should count a single split', () => {
    const input = readFileSync(
      'days/7/part-1/test-input-single-split.txt',
      'utf-8',
    );
    const result = countBeamSplits(input);
    expect(result).toBe(1);
  });
  it('should return correct count for the test input', () => {
    const input = readFileSync('days/7/part-1/test-input.txt', 'utf-8');
    const result = countBeamSplits(input);
    expect(result).toBe(21);
  });
  it('should solve the puzzle input', () => {
    const input = readFileSync('days/7/puzzle-input.txt', 'utf-8');
    const result = countBeamSplits(input);
    expect(result).toBe(1646);
  });
});
