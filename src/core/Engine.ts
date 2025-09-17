import { Scene } from './Scene';
import { Renderer } from './Renderer';
import { Clock } from './Clock';

export class Engine {
  private scene: Scene;
  private renderer: Renderer;
  private clock: Clock;

  constructor(renderer: Renderer) {
    this.renderer = renderer;
    this.scene = new Scene();
    this.clock = new Clock();
  }

  getScene(): Scene {
    return this.scene;
  }

  run(callback?: () => void) {
    const loop = () => {
      const delta = this.clock.getDelta();
      this.scene.update(delta);
      this.renderer.render(this.scene);
      callback?.();
      requestAnimationFrame(loop);
    };
    loop();
  }
}
