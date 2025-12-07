import { puzzleInput } from '../puzzle-input';
import { getTotalFreshIngredients } from './getTotalFreshIngredients';

describe('getTotalFreshIngredients', () => {
  it('should count all fresh ingredients in all ranges', () => {
    const input = `
    3-5
    10-14
    16-20
    12-18

    1
    5
    8
    11
    17
    32
    `;
    const result = getTotalFreshIngredients(input);
    expect(result).toBe(14);
  });
  it.skip('should handle big ranges', () => {
    const input = `
    121847024509459-126345620041267
    522880293422404-523179474172233
    158459878825465-159131956260867
    213743501161201-219471291456959

    494837294376908
    435660505746994
    99786817997391
    472909760977579
    `;
    const result = getTotalFreshIngredients(input);
    expect(result).toBe(14);
  });
  it.skip('should solve the puzzle input', () => {
    const input = puzzleInput;
    const result = getTotalFreshIngredients(input);
    expect(result).toBe(756);
  });
});
