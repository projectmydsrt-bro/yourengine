export class Clock {
  private lastTime: number;

  constructor() {
    this.lastTime = performance.now();
  }

  getDelta(): number {
    const now = performance.now();
    const delta = (now - this.lastTime) / 1000; // detik
    this.lastTime = now;
    return delta;
  }

  getElapsedTime(): number {
    return (performance.now() - this.lastTime) / 1000;
  }
}
