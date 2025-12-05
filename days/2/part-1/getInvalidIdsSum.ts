import { getInvalidIds } from './getInvalidIds';
/**
 * Calculates the sum of all invalid IDs from the given input string.
 *
 * @param input A string of ID ranges separated by commas.
 * @returns The sum of all invalid IDs found within the given ranges.
 */
export const getInvalidIdsSum = (input: string): number => {
  const invalidIds = getInvalidIds(input);
  return invalidIds.reduce((acc, id) => acc + id, 0);
};
