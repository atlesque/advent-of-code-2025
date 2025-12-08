import { parseCoordinatesList } from './parseCoordinatesList';

describe('parseCoordinatesList', () => {
  it('should parse a list of coordinates from a string', () => {
    const input = '1,2,3\n4,5,6\n7,8,9';
    const expectedOutput = [
      { x: 1, y: 2, z: 3 },
      { x: 4, y: 5, z: 6 },
      { x: 7, y: 8, z: 9 },
    ];
    const result = parseCoordinatesList(input);
    expect(result).toEqual(expectedOutput);
  });
});
