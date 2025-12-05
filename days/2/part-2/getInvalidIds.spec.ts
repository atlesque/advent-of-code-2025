import { getInvalidIds } from './getInvalidIds';

describe('getInvalidIds', () => {
  it('should return invalid ids from a single range with invalid starts and ends', () => {
    const input = '11-22';
    const invalidIds = getInvalidIds(input);
    expect(invalidIds).toEqual([11, 22]);
  });
  it('should return invalid ids from a single range 95-115', () => {
    const input = '95-115';
    const invalidIds = getInvalidIds(input);
    expect(invalidIds).toEqual([99, 111]);
  });
  it('should return invalid ids from a single range 998-1012', () => {
    const input = '998-1012';
    const invalidIds = getInvalidIds(input);
    expect(invalidIds).toEqual([999, 1010]);
  });
  it('should return invalid ids from a range with 10-digit numbers', () => {
    const input = '1188511880-1188511890';
    const invalidIds = getInvalidIds(input);
    expect(invalidIds).toEqual([1188511885]);
  });
  it('should return invalid id 222222 from range 222220-222224', () => {
    const input = '222220-222224';
    const invalidIds = getInvalidIds(input);
    expect(invalidIds).toEqual([222222]);
  });
  it('should return no invalid ids from range 1698522-1698528', () => {
    const input = '1698522-1698528';
    const invalidIds = getInvalidIds(input);
    expect(invalidIds).toEqual([]);
  });
  it('should return invalid id 446446 from range 446443-446449', () => {
    const input = '446443-446449';
    const invalidIds = getInvalidIds(input);
    expect(invalidIds).toEqual([446446]);
  });
  it('should return invalid id 38593859 from range 38593856-38593862', () => {
    const input = '38593856-38593862';
    const invalidIds = getInvalidIds(input);
    expect(invalidIds).toEqual([38593859]);
  });
  it('should return invalid id 565656 from range 565653-565659', () => {
    const input = '565653-565659';
    const invalidIds = getInvalidIds(input);
    expect(invalidIds).toEqual([565656]);
  });
  it('should return invalid id 824824824 from range 824824821-824824827', () => {
    const input = '824824821-824824827';
    const invalidIds = getInvalidIds(input);
    expect(invalidIds).toEqual([824824824]);
  });
  it('should return invalid id 2121212121 from range 2121212118-2121212124', () => {
    const input = '2121212118-2121212124';
    const invalidIds = getInvalidIds(input);
    expect(invalidIds).toEqual([2121212121]);
  });
});
