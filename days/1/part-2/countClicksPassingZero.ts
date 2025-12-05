import { Dial } from '../dial';
import { expandRotations } from './expandRotations';

interface Props {
  startPosition?: number;
  rotations: string[];
}

export const countClicksPassingZero = ({
  startPosition = 0,
  rotations,
}: Props): number => {
  const dial = new Dial(startPosition);
  let zeroCount = 0;
  const expandedRotations = expandRotations(rotations);

  for (const rotation of expandedRotations) {
    dial.rotate(rotation);
    if (dial.getPosition() === 0) {
      zeroCount++;
    }
  }

  return zeroCount;
};
