import { Coordinates } from './coordinates.type';
import { getEuclideanDistance } from './getEuclideanDistance';

export const findClosestPair = (pairsList: Coordinates[]): Coordinates[] => {
  const closestPair = [];
  let minDistance = Infinity;
  for (let i = 0; i < pairsList.length; i++) {
    for (let j = i + 1; j < pairsList.length; j++) {
      const distance = getEuclideanDistance(pairsList[i], pairsList[j]);
      if (distance < minDistance) {
        minDistance = distance;
        closestPair[0] = pairsList[i];
        closestPair[1] = pairsList[j];
      }
    }
  }
  return closestPair;
};
