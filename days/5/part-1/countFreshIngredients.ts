interface Range {
  start: number;
  end: number;
}

interface Database {
  freshIngredientsRanges: Range[];
  ingredients: number[];
}

export const parseDatabaseInput = (input: string): Database => {
  const lines = input
    .trim()
    .split('\n')
    .map((line) => line.trim());
  const separatorIndex = lines.indexOf('');
  return {
    freshIngredientsRanges: lines.slice(0, separatorIndex).map((range) => {
      const [start, end] = range.split('-').map(Number);
      return {
        start,
        end,
      };
    }),
    ingredients: lines.slice(separatorIndex + 1).map((line) => Number(line)),
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
