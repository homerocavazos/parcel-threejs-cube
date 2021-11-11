import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

import { WEBGL } from "three/examples/jsm/WebGL";

// ThreeJS always needs these three
// - Scene, Camera and Render

const scene = new Scene();
const camera = new PerspectiveCamera(
  75, // field view
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1, // near
  1000 // far
);

const render = new WebGLRenderer();

render.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(render.domElement);

// Adding cube
const geometry = new BoxGeometry();
const material = new MeshBasicMaterial({ color: 0x00ff00 });
const cube = new Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  render.render(scene, camera);
}

if (WEBGL.isWebGLAvailable()) {
  // Initiate function or other initializations here
  animate();
} else {
  const warning = WEBGL.getWebGLErrorMessage();
  document.getElementById("container").appendChild(warning);
}
