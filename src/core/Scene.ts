import { Object3D } from '../objects/Object3D';
import { Light } from '../lights/Light';
import { Camera } from '../cameras/Camera';

export class Scene {
  private objects: Object3D[] = [];
  private lights: Light[] = [];
  private cameras: Camera[] = [];

  add(object: Object3D | Light | Camera) {
    if ('update' in object) this.objects.push(object as Object3D);
    else if ('intensity' in object) this.lights.push(object as Light);
    else this.cameras.push(object as Camera);
  }

  remove(object: Object3D | Light | Camera) {
    this.objects = this.objects.filter(o => o !== object);
    this.lights = this.lights.filter(l => l !== object);
    this.cameras = this.cameras.filter(c => c !== object);
  }

  getObjects(): Object3D[] {
    return this.objects;
  }

  getLights(): Light[] {
    return this.lights;
  }

  getCameras(): Camera[] {
    return this.cameras;
  }

  update(delta: number) {
    this.objects.forEach(obj => obj.update(delta));
    // Lights or animations could also update here if needed
  }
}
