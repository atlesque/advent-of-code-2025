import { parseDatabaseInput } from '../part-1/countFreshIngredients';

export const getTotalFreshIngredients = (input: string): number => {
  const { freshIngredientsRanges } = parseDatabaseInput(input);

  // TODO: Convert to use interval merging for better performance with large ranges
  const freshIngredientsSet = new Set<number>();

  for (const range of freshIngredientsRanges) {
    for (let i = range.start; i <= range.end; i++) {
      freshIngredientsSet.add(i);
    }
  }

  return freshIngredientsSet.size;
};
