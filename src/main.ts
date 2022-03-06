import './style.css'

import { Scene, WebGLRenderer, PerspectiveCamera, Group, DirectionalLight } from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import model from './assets/island.glb?url';
let island: Group;

let scene = new Scene();

let camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
camera.position.y = 1;

const directionalLight = new DirectionalLight(0xFFFFFF, 0.7);
scene.add(directionalLight);

let renderer = new WebGLRenderer({
  antialias: true, // 表面を滑らかにする
	alpha: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
renderer.physicallyCorrectLights = true;
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

const gltfLoader = new GLTFLoader();
gltfLoader.load(model, (data) => {
  island = data.scene;
  island.scale.set(0.5, 0.5, 0.5);
  scene.add(island);
});

const animate = () => {
  requestAnimationFrame(animate);
  if (island != null) island.rotation.y += 0.005;
  renderer.render(scene, camera);
};
animate();

const resize = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};
window.addEventListener('resize', resize);
resize();
