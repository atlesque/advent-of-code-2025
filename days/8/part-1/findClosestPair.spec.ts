import { findClosestPair } from './findClosestPair';

describe('findClosestPair', () => {
  it('should find the closest pair of coordinates from a list', () => {
    const input = [
      { x: 1, y: 2, z: 3 },
      { x: 4, y: 5, z: 6 },
    ];
    const expectedOutput = [
      { x: 1, y: 2, z: 3 },
      { x: 4, y: 5, z: 6 },
    ];
    const result = findClosestPair(input);
    expect(result).toEqual(expectedOutput);
  });
});
