import { getAccessibleRolls } from './getAccessibleRolls';

describe('getAccessibleRolls', () => {
  it('should return 0 rolls for an empty input', () => {
    const input = '';
    expect(getAccessibleRolls(input)).toBe(0);
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
    expect(getAccessibleRolls(input)).toBe(13);
  });
});
