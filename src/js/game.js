import * as BABYLON from 'babylonjs';
import sceneFile from '../babylon_files/icosahedron.babylon';
import { ServerConnection } from './server_connection';

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.updateInterval = null;
    this.engine = new BABYLON.Engine(this.canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true
    });

    window.addEventListener('resize', this.onResize.bind(this));
    this.onResize();
    this.serverConn = new ServerConnection();
    this.serverConn.connect();
  }

  destroy() {
    clearInterval(this.updateInterval);
    this.serverConn.disconnect();
    this.engine.dispose();
  }

  onResize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight - 250;
    this.engine.resize();
  }

  async loadScene() {
    let scene = await BABYLON.SceneLoader.LoadAsync('', sceneFile.replace('/', ''), this.engine);
    scene.clearColor = new BABYLON.Color4(0,0,0,0.0000000000000001);
    this.glowMaterials = [];

    for(let i=0; i<20; i++) {
      let material = new BABYLON.StandardMaterial(`glowMaterial${i}`, scene);
      material.emissiveColor = new BABYLON.Color3(1, 1, 0);
      this.glowMaterials.push(material);
    }

    let darkMaterial = new BABYLON.StandardMaterial('darkMaterial', scene);
    darkMaterial.ambientColor = new BABYLON.Color3(0, 0, 0);

    scene.createDefaultCamera(true, true, true);

    this.scene = scene;
    let gl = new BABYLON.GlowLayer('glow', scene);
    gl.intensity = 0.15;

    scene.meshes.forEach((m)=> {
      console.log(m.name);
      let match = m.name.match(/(\d+)_surface/);
      if(match) {
        console.log(this.glowMaterials[parseInt(match[1])-1]);
        m.material = this.glowMaterials[parseInt(match[1])-1];
      } else {
        m.material = darkMaterial;
      }
    });
  }

  sendState() {
    this.serverConn.send(this.glowMaterials.map((gm) => {
      let color = gm.emissiveColor;

      return {
        r: color.r * 255,
        g: color.g * 255,
        b: color.b * 255
      };
    }));
  }

  setPixelState(pixels) {
    for(const index in pixels) {
      let pixel = pixels[index];

      console.log(`( ${pixel.r},${pixel.g},${pixel.b} )`);

      let mat = this.scene.getMaterialByName(`glowMaterial${index}`);

      mat.emissiveColor.r = pixel.r;
      mat.emissiveColor.g = pixel.g;
      mat.emissiveColor.b = pixel.b;
    }

    this.sendState();
  }

  start() {
    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }
}
