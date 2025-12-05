/**
 * Parses a string of ID ranges separated by commas
 * into an array of individual IDs.
 *
 * @example '11-22,95-115' => ['11-22', '95-115']
 */
export const parseIdRanges = (input: string): string[] => {
  return input.split(',');
};
