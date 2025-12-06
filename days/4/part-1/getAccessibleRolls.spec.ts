import { puzzleInput } from '../puzzle-input';
import { getAccessibleRolls } from './getAccessibleRolls';

describe('getAccessibleRolls', () => {
  it('should return 0 rolls for an empty input', () => {
    const input = '';
    const { totalAccessibleRolls } = getAccessibleRolls(input);
    expect(totalAccessibleRolls).toBe(0);
  });
  it('should return the total accessible rolls', () => {
    const input = `
    ..@@.@@@@.
    @@@.@.@.@@
    @@@@@.@.@@
    @.@@@@..@.
    @@.@@@@.@@
    .@@@@@@@.@
    .@.@.@.@@@
    @.@@@.@@@@
    .@@@@@@@@.
    @.@.@@@.@.
    `;
    const { totalAccessibleRolls } = getAccessibleRolls(input);
    expect(totalAccessibleRolls).toBe(13);
  });
  it('should solve the puzzle input', () => {
    const input = puzzleInput;
    const { totalAccessibleRolls } = getAccessibleRolls(input);
    expect(totalAccessibleRolls).toBe(1409);
  });
});
