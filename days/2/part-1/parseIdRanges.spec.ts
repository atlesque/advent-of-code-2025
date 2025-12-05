import { parseIdRanges } from './parseIdRanges';

describe('parseIdRanges', () => {
  it('should parse a single ID range', () => {
    const input = '11-22';
    const result = parseIdRanges(input);
    expect(result).toEqual(['11-22']);
  });
  it('should parse multiple ID ranges', () => {
    const input = '11-22,33-44';
    const result = parseIdRanges(input);
    expect(result).toEqual(['11-22', '33-44']);
  });
});
