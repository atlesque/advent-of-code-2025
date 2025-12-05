import { Dial } from './dial';

interface Props {
  startPosition?: number;
  rotations: string[];
}

export const getTotalZeroesInRotations = ({
  startPosition = 0,
  rotations,
}: Props): number => {
  const dial = new Dial(startPosition);
  let zeroCount = 0;

  for (const rotation of rotations) {
    dial.rotate(rotation);
    if (dial.getPosition() === 0) {
      zeroCount++;
    }
  }

  return zeroCount;
};
