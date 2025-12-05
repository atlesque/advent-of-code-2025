/**
 * Returns a list of invalid IDs from the given input string.
 *
 * You can find the invalid IDs by looking for any ID which is
 * made only of some sequence of digits repeated twice.
 * So, 55 (5 twice), 6464 (64 twice), and 123123 (123 twice)
 * would all be invalid IDs.
 *
 * @example '11-22,95-115' => [11, 22, 99]
 */
export const getInvalidIds = (input: string): number[] => {
  const ranges = input.split(',');
  const invalidIds: number[] = [];

  for (const range of ranges) {
    const [startStr, endStr] = range.split('-');
    const startId = parseInt(startStr, 10);
    const endId = parseInt(endStr, 10);

    for (let idToCheck = startId; idToCheck <= endId; idToCheck++) {
      const idString = idToCheck.toString();

      if (idString.length % 2 === 0) {
        const halfLen = idString.length / 2;
        const firstHalf = idString.slice(0, halfLen);
        const secondHalf = idString.slice(halfLen);

        if (firstHalf === secondHalf) {
          invalidIds.push(idToCheck);
        }
      }
    }
  }

  return invalidIds;
};
