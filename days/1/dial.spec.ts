import { describe, it } from 'vitest';
import { Dial } from './dial';

describe('Dial', () => {
  it('should return the original start position if there are no rotations', () => {
    const startPosition = 50;
    const dial = new Dial(startPosition);
    expect(dial.getPosition()).toEqual(startPosition);
  });
  it('should correctly rotate right', () => {
    const dial = new Dial(0);
    dial.rotate('R30');
    expect(dial.getPosition()).toEqual(30);
  });
  it('should correctly rotate left', () => {
    const dial = new Dial(50);
    dial.rotate('L20');
    expect(dial.getPosition()).toEqual(30);
  });
  it('should wrap around when rotating right past 99', () => {
    const dial = new Dial(90);
    dial.rotate('R15');
    expect(dial.getPosition()).toEqual(5);
  });
  it('should wrap around when rotating left past 0', () => {
    const dial = new Dial(10);
    dial.rotate('L15');
    expect(dial.getPosition()).toEqual(95);
  });
  it('should handle multiple rotations correctly', () => {
    const dial = new Dial(0);
    dial.rotate('R50');
    dial.rotate('L20');
    dial.rotate('R80');
    expect(dial.getPosition()).toEqual(10);
  });
  it('should handle a rotation with a high number of clicks', () => {
    const dial = new Dial(50);
    dial.rotate('R1000');
    expect(dial.getPosition()).toEqual(50);
  });
});
