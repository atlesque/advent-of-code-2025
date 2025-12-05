import { describe, it } from 'vitest';
import { getTotalZeroesInRotations } from './dial-solver';
import { puzzleInput } from './puzzle-input';

describe('Day 1', () => {
  it('should return the number of times the dial is left pointing at 0 after any rotation in the sequence', () => {
    const startPosition = 50;
    const rotations = [
      "L68",
      "L30",
      "R48",
      "L5",
      "R60",
      "L55",
      "L1",
      "L99",
      "R14",
      "L82",
    ];
    const expectedTotalZeroes = 3;
    const totalZeroes = getTotalZeroesInRotations({ startPosition, rotations });
    expect(totalZeroes).toEqual(expectedTotalZeroes);
  });

  it('should solve the challenge input', () => {
    const startPosition = 50;
    const totalZeroes = getTotalZeroesInRotations({ startPosition, rotations: puzzleInput });
    const expectedTotalZeroes = 1052;
    expect(totalZeroes).toEqual(expectedTotalZeroes);
  })
});
