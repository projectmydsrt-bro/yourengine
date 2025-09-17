import { Scene } from './Scene';
import { Camera } from '../cameras/Camera';

export abstract class Renderer {
  abstract render(scene: Scene, camera?: Camera): void;
}
