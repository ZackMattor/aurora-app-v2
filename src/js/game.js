import * as BABYLON from 'babylonjs';
import * as GUI from 'babylonjs-gui';
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
    console.log('woo');
    let scene = await BABYLON.SceneLoader.LoadAsync('', sceneFile.replace('/', ''), this.engine);
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
      let match = m.name.match(/(\d+)_surface/);
      if(match) {
        m.material = this.glowMaterials[parseInt(match[1])];
      } else {
        m.material = darkMaterial;
      }
    });

    // GUI
    try {
      let advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI('UI');
      let panel = new GUI.StackPanel();
      panel.width = '200px';
      panel.isVertical = true;
      panel.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
      panel.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
      advancedTexture.addControl(panel);

      let textBlock = new GUI.TextBlock();
      textBlock.text = 'Diffuse color:';
      textBlock.height = '30px';
      panel.addControl(textBlock);

      let picker = new GUI.ColorPicker();
      picker.value = this.glowMaterials[0].emissiveColor;
      picker.height = '200px';
      picker.width = '150px';
      picker.paddingBottom = '50px';
      picker.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
      picker.onValueChangedObservable.add((color) => {
        this.glowMaterials.forEach((gm) => {
          gm.emissiveColor.copyFrom(color);
        });
      });

      panel.addControl(picker);
    } catch(err) {
      console.error(err);
    }
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

  start() {
    let foo = 0;

    this.updateInterval = setInterval(() => {
      let mat = this.scene.getMaterialByName('glowMaterial5');
      BABYLON.Color3.HSVtoRGBToRef(foo,0.6,1,mat.emissiveColor);
      foo += 10;
      if(foo == 360) foo = 0;
      this.sendState();
    }, 1000/20);

    this.sendState();
    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }
}
