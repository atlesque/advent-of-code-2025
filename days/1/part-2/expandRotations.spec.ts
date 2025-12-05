import { describe, it } from 'vitest';
import { expandRotations } from './expandRotations';

describe('expandRotations', () => {
  it('should expand rotations into single-click increments', () => {
    const rotations = ['L3', 'R2', 'L1'];
    const expectedExpanded = ['L1', 'L1', 'L1', 'R1', 'R1', 'L1'];
    const expanded = expandRotations(rotations);
    expect(expanded).toEqual(expectedExpanded);
  });
});
