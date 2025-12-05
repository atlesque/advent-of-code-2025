import { puzzleInput } from '../puzzle-input';
import { getInvalidIdsSum } from './getInvalidIdsSum';

describe('getInvalidIdsSum', () => {
  it('should return the sum of invalid ids from a single range', () => {
    const input = '11-22';
    const invalidIdsSum = getInvalidIdsSum(input);
    expect(invalidIdsSum).toBe(11 + 22);
  });
  it('should return the sum of invalid ids from multiple ranges', () => {
    const input = '11-22,95-115';
    const invalidIdsSum = getInvalidIdsSum(input);
    expect(invalidIdsSum).toBe(11 + 22 + 99);
  });
  it('should return 0 when there are no invalid ids', () => {
    const input = '1698522-1698528';
    const invalidIdsSum = getInvalidIdsSum(input);
    expect(invalidIdsSum).toBe(0);
  });
  it('should solve the challenge input', () => {
    const input = puzzleInput;
    const invalidIdsSum = getInvalidIdsSum(input);
    expect(invalidIdsSum).toBe(8576933996);
  });
});
