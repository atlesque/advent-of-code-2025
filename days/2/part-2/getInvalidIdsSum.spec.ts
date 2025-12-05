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
    expect(invalidIdsSum).toBe(11 + 22 + 99 + 111);
  });
  it('should return 0 when there are no invalid ids', () => {
    const input = '1698522-1698528';
    const invalidIdsSum = getInvalidIdsSum(input);
    expect(invalidIdsSum).toBe(0);
  });
  it('should solve the example input', () => {
    const input =
      '11-22,95-115,998-1012,1188511880-1188511890,222220-222224,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124';
    const invalidIdsSum = getInvalidIdsSum(input);
    expect(invalidIdsSum).toBe(4174379265);
  });
  it('should solve the challenge input', () => {
    const input = puzzleInput;
    const invalidIdsSum = getInvalidIdsSum(input);
    expect(invalidIdsSum).toBe(25663320831);
  });
});
