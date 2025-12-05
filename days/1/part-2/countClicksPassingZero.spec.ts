import { describe, it } from 'vitest';
import { puzzleInput } from '../puzzle-input';
import { countClicksPassingZero } from './countClicksPassingZero';

describe('countClicksPassingZero', () => {
  it('should return the number of times the dial passed 0', () => {
    const startPosition = 50;
    const rotations = [
      'L68',
      'L30',
      'R48',
      'L5',
      'R60',
      'L55',
      'L1',
      'L99',
      'R14',
      'L82',
    ];
    const expectedTotalZeroes = 6;
    const totalZeroes = countClicksPassingZero({
      startPosition,
      rotations,
    });
    expect(totalZeroes).toEqual(expectedTotalZeroes);
  });

  it('should handle a rotation with a high number of clicks', () => {
    const startPosition = 50;
    const rotations = ['R1000'];
    const expectedTotalZeroes = 10;
    const totalZeroes = countClicksPassingZero({
      startPosition,
      rotations,
    });
    expect(totalZeroes).toEqual(expectedTotalZeroes);
  });

  it('should solve the challenge input', () => {
    const startPosition = 50;
    const totalZeroes = countClicksPassingZero({
      startPosition,
      rotations: puzzleInput,
    });
    const expectedTotalZeroes = 6295;
    expect(totalZeroes).toEqual(expectedTotalZeroes);
  });
});
