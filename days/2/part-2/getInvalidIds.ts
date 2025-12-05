/**
 * Returns a list of invalid IDs from the given input string.
 *
 * An ID is invalid if it is made only of some sequence of digits
 * repeated at least twice. So, 12341234 (1234 two times),
 * 123123123 (123 three times), 1212121212 (12 five times),
 * and 1111111 (1 seven times) are all invalid IDs.
 *
 * @example '11-22,95-115' => [11, 22, 99, 111]
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

      const halfLen = Math.floor(idString.length / 2);
      for (let position = 0; position < halfLen; position++) {
        const segment = idString.slice(0, position + 1);
        const idStringWithoutSegment = idString.replaceAll(segment, '');

        if (idStringWithoutSegment === '') {
          invalidIds.push(idToCheck);
          break;
        }
      }
    }
  }

  return invalidIds;
};
