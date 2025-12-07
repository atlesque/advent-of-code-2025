export interface IngredientsRange {
  start: number;
  end: number;
}

interface Database {
  freshIngredientsRanges: IngredientsRange[];
  ingredients: number[];
}

const parseIngredientsRange = (input: string): IngredientsRange => {
  const [start, end] = input.split('-').map(Number);
  return {
    start,
    end,
  };
};

export const parseDatabaseInput = (input: string): Database => {
  const lines = input
    .trim()
    .split('\n')
    .map((line) => line.trim());
  const separatorIndex = lines.indexOf('');
  const freshIngredientsRanges = lines
    .slice(0, separatorIndex)
    .map(parseIngredientsRange);
  const ingredients = lines
    .slice(separatorIndex + 1)
    .map((line) => Number(line));
  return {
    freshIngredientsRanges,
    ingredients,
  };
};

export const countFreshIngredients = (input: string): number => {
  const { freshIngredientsRanges, ingredients } = parseDatabaseInput(input);
  let count = 0;
  for (const ingredient of ingredients) {
    for (const range of freshIngredientsRanges) {
      if (ingredient >= range.start && ingredient <= range.end) {
        count++;
        break;
      }
    }
  }
  return count;
};
