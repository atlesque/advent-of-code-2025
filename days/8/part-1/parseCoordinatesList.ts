import { Coordinates } from './coordinates.type';

export const parseCoordinatesList = (input: string): Coordinates[] => {
  return input.split('\n').map((line) => {
    const [x, y, z] = line.split(',').map(Number);
    return { x, y, z };
  });
};
