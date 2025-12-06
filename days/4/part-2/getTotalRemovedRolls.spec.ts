import { puzzleInput } from '../puzzle-input';
import { getTotalRemovedRolls } from './getTotalRemovedRolls';

describe('getTotalRemovedRolls', () => {
  it('should return 0 rolls for an empty input', () => {
    const input = '';
    expect(getTotalRemovedRolls(input)).toBe(0);
  });
  it('should return the total removed rolls', () => {
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
    expect(getTotalRemovedRolls(input)).toBe(43);
  });
  it('should solve the puzzle input', () => {
    const input = puzzleInput;
    expect(getTotalRemovedRolls(input)).toBe(8366);
  });
});
