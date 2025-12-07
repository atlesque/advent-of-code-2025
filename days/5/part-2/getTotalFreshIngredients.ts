import {
  IngredientsRange,
  parseDatabaseInput,
} from '../part-1/countFreshIngredients';

const consolidateRanges = (ranges: IngredientsRange[]): IngredientsRange[] => {
  if (ranges.length === 0) {
    return [];
  }
  const sortedRanges = [...ranges].sort((a, b) => a.start - b.start);
  const consolidatedRanges: IngredientsRange[] = [sortedRanges[0]];
  for (let i = 1; i < sortedRanges.length; i++) {
    const current = sortedRanges[i];
    const last = consolidatedRanges[consolidatedRanges.length - 1];
    // Check if current range overlaps or is adjacent to the last consolidated range
    if (current.start <= last.end + 1) {
      // Merge by extending the end if necessary
      last.end = Math.max(last.end, current.end);
    } else {
      // No overlap, add as new range
      consolidatedRanges.push({ ...current });
    }
  }
  return consolidatedRanges;
};

export const getTotalFreshIngredients = (input: string): number => {
  const { freshIngredientsRanges } = parseDatabaseInput(input);
  const consolidatedRanges = consolidateRanges(freshIngredientsRanges);
  const totalFreshIngredients = consolidatedRanges.reduce(
    (acc, curr) => (acc += Math.max(curr.end - curr.start + 1, 0)),
    0,
  );
  return totalFreshIngredients;
};
