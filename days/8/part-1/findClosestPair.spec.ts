import { readFileSync } from 'fs';
import { findClosestPair } from './findClosestPair';
import { parseCoordinatesList } from './parseCoordinatesList';

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
  it('should solve the test input correctly', () => {
    const input = readFileSync('./days/8/part-1/test-input.txt', 'utf-8');
    const coordinatesList = parseCoordinatesList(input);
    const expectedOutput = [
      { x: 162, y: 817, z: 812 },
      { x: 425, y: 690, z: 689 },
    ];
    const result = findClosestPair(coordinatesList);
    expect(result).toEqual(expectedOutput);
  });
});
