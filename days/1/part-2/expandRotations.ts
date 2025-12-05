/**
 * Expands rotations into single-click increments
 *
 * @example ['L3', 'R2', 'L1'] becomes ['L1', 'L1', 'L1', 'R1', 'R1', 'L1']
 */
export const expandRotations = (rotations: string[]): string[] => {
  const expanded: string[] = [];

  for (const rotation of rotations) {
    const direction = rotation[0];
    const clicks = parseInt(rotation.slice(1), 10);

    for (let i = 0; i < clicks; i++) {
      expanded.push(direction + '1');
    }
  }

  return expanded;
};
