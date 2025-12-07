import { readFileSync } from 'fs';
import { countBeamSplits } from './countBeamSplits';

describe('countBeamSplits', () => {
  it('should return 0 for an empty beam path', () => {
    const beamPath = '';
    const result = countBeamSplits(beamPath);
    expect(result).toBe(0);
  });
  it('should return 0 when no splits occur', () => {
    const beamPath = readFileSync(
      'days/7/part-1/test-input-no-splits.txt',
      'utf-8',
    );
    const result = countBeamSplits(beamPath);
    expect(result).toBe(0);
  });
  it('should should count a single split', () => {
    const beamPath = readFileSync(
      'days/7/part-1/test-input-single-split.txt',
      'utf-8',
    );
    const result = countBeamSplits(beamPath);
    expect(result).toBe(1);
  });
  it('should return correct count for the test input', () => {
    const beamPath = readFileSync('days/7/part-1/test-input.txt', 'utf-8');
    const result = countBeamSplits(beamPath);
    expect(result).toBe(21);
  });
});
