export class Dial {
  private position: number;

  constructor(startPosition: number = 0) {
    this.position = startPosition % 100;
  }

  rotate(rotation: string): void {
    const direction = rotation[0];
    const amount = parseInt(rotation.slice(1), 10);

    if (direction === 'L') {
      this.position = (this.position - amount + 100) % 100;
    } else if (direction === 'R') {
      this.position = (this.position + amount) % 100;
    }
  }

  getPosition(): number {
    return this.position;
  }
}
