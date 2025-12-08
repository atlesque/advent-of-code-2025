import { getEuclideanDistance } from './getEuclideanDistance';

describe('getEuclideanDistance', () => {
  it('should calculate the Euclidean distance between one point', () => {
    const pointA = { x: 1, y: 2, z: 3 };
    const expectedDistance = 0;
    const result = getEuclideanDistance(pointA, pointA);
    expect(result).toBe(expectedDistance);
  });
  it('should calculate the Euclidean distance between two different points', () => {
    const pointA = { x: 1, y: 2, z: 3 };
    const pointB = { x: 4, y: 6, z: 8 };
    const expectedDistance = Math.hypot(3, 4, 5);
    const result = getEuclideanDistance(pointA, pointB);
    expect(result).toBe(expectedDistance);
  });
});
