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
    this.canvas.height = window.innerHeight / 2;
    this.engine.resize();
  }

  onFaceClick(id) {
    console.info(`No implementor for face click (${id})`);
  }

  async loadScene() {
    let scene = await BABYLON.SceneLoader.LoadAsync('', sceneFile.replace('/', ''), this.engine);
    this.scene = scene;

    scene.onPointerObservable.add((eventData) => {
      if (eventData.type == 32) {
        let mesh = eventData.pickInfo.pickedMesh;

        if(mesh && mesh.id.match(/\d\d_surface/)) {
          let id = parseInt(mesh.id.slice(0, 2));
          this.onFaceClick(id);
        }
      }
    });

    this.highlightLayer = new BABYLON.HighlightLayer('hl1');
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

    let gl = new BABYLON.GlowLayer('glow', scene);
    gl.intensity = 0.15;

    scene.meshes.forEach((m)=> {
      let match = m.name.match(/(\d+)_surface/);
      if(match) {
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

      let mat = this.scene.getMaterialByName(`glowMaterial${index}`);

      mat.emissiveColor.r = pixel.r;
      mat.emissiveColor.g = pixel.g;
      mat.emissiveColor.b = pixel.b;
    }

    this.sendState();
  }

  setSelectedState(faces) {
    this.scene.meshes.forEach((m) => this.highlightLayer.removeMesh(m));

    for(const face of faces) {
      let id = face < 10 ? '0' + face : face;
      let m = this.scene.meshes.find((m) => m.id === `${id}_surface`);

      if(m) {
        this.highlightLayer.addMesh(m, BABYLON.Color3.Yellow());
      } else {
        console.error('No mesh found for that face!');
      }
    }

  }

  start() {
    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }
}
