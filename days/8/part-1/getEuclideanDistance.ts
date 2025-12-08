import { Coordinates } from './coordinates.type';

export const getEuclideanDistance = (
  pointA: Coordinates,
  pointB: Coordinates,
): number => {
  return Math.hypot(
    pointB.x - pointA.x,
    pointB.y - pointA.y,
    pointB.z - pointA.z,
  );
};
