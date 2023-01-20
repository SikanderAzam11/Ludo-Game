import * as THREE from 'three'
export const Dice = () =>{

var scene, camera, renderer;
var dice;

init();
animate();

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var material = new THREE.MeshBasicMaterial({color: 0xffffff});
  dice = new THREE.Mesh(geometry, material);
  scene.add(dice);
  
  camera.position.z = 5;
}
var faces = [
  new THREE.Vector3(1, 0, 0),
  new THREE.Vector3(-1, 0, 0),
  new THREE.Vector3(0, 1, 0),
  new THREE.Vector3(0, -1, 0),
  new THREE.Vector3(0, 0, 1),
  new THREE.Vector3(0, 0, -1)
];
var texture1 = new THREE.TextureLoader().load("texture1.png");
var texture2 = new THREE.TextureLoader().load("texture2.png");
var texture3 = new THREE.TextureLoader().load("texture3.png");
var texture4 = new THREE.TextureLoader().load("texture4.png");
var texture5 = new THREE.TextureLoader().load("texture5.png");
var texture6 = new THREE.TextureLoader().load("texture6.png");
var material1 = new THREE.MeshBasicMaterial({map: texture1});
var material2 = new THREE.MeshBasicMaterial({map: texture2});
var material3 = new THREE.MeshBasicMaterial({map: texture3});
var material4 = new THREE.MeshBasicMaterial({map: texture4});
var material5 = new THREE.MeshBasicMaterial({map: texture5});
var material6 = new THREE.MeshBasicMaterial({map: texture6});

var materials = [material1, material2, material3, material4, material5, material6];
//Add this function 
function setFaceMaterial(face) {
  if(face.x === 1) dice.material = materials[0];
  if(face.x === -1) dice.material = materials[1];
  if(face.y === 1) dice.material = materials[2];
  if(face.y === -1) dice.material = materials[3];
  if(face.z === 1) dice.material = materials[4];
  if(face.z === -1) dice.material = materials[5];
}
// Call setFaceMaterial function inside rollDice function
function rollDice() {
  var face = faces[Math.floor(Math.random() * faces.length)];
  dice.rotation.x = face.x;
  dice.rotation.y = face.y;
  dice.rotation.z = face.z;  
  setFaceMaterial(face);
}


// Call rollDice function after the dice stops rolling
setTimeout(function(){ rollDice(); }, 2000);


function animate() {
  requestAnimationFrame(animate);
  // dice.rotation.x += 0.01;
  // dice.rotation.y += 0.01;
  renderer.render(scene, camera);
}
}

