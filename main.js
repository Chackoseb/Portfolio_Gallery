import * as THREE from 'three';
import { Fog } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MapControls } from 'three/addons/controls/MapControls.js';

// Create the scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create the renderer and add it to the DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new MapControls( camera, renderer.domElement );

const boundingBox = new THREE.Box3(
  new THREE.Vector3(-5, 0, -5), // Minimum corner of the box
  new THREE.Vector3(5, 0, 5)  // Maximum corner of the box
);


// ground
const geometry = new THREE.PlaneGeometry(6, 6);
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('./assets/tile.jpg');
const material = new THREE.MeshPhongMaterial({ map: texture, side: THREE.DoubleSide });
material.wrapS = THREE.RepeatWrapping;
material.wrapT = THREE.RepeatWrapping;
material.needsUpdate = true;
const plane = new THREE.Mesh(geometry, material);
plane.rotation.x = Math.PI/2
scene.add(plane);

const geometry1 = new THREE.PlaneGeometry(10, 10);
const textureLoader1 = new THREE.TextureLoader();
const texture1 = textureLoader1.load('./assets/ground5.jpg');
const material1 = new THREE.MeshPhongMaterial({map:texture1, side: THREE.DoubleSide, color: 0X82AD58});
material1.wrapS = THREE.RepeatWrapping;
material1.wrapT = THREE.RepeatWrapping;
material1.needsUpdate = true;
const plane1 = new THREE.Mesh(geometry1, material1);
plane1.rotation.x = Math.PI/2
plane1.position.y = -0.001
scene.add(plane1);

const geometrytext = new THREE.PlaneGeometry(1.6, 0.9);
const textureLoadertext = new THREE.TextureLoader();
const texturetext = textureLoadertext.load('./assets/textcontent.jpg');
const materialtext = new THREE.MeshPhongMaterial({ map: texturetext,  transparent: true, opacity: 0.6 });
const planetext = new THREE.Mesh(geometrytext, materialtext);
planetext.rotation.x = -(Math.PI/10+0.01)
planetext.position.set(0,0.8,2.4)
scene.add(planetext);

const geometrythreat = new THREE.PlaneGeometry(1.6, 0.9);
const textureLoaderthreat = new THREE.TextureLoader();
const texturethreat = textureLoaderthreat.load('./assets/threat.jpg');
const materialthreat = new THREE.MeshPhongMaterial({ map: texturethreat,  transparent: true, opacity: 1 });
const planethreat = new THREE.Mesh(geometrythreat, materialthreat);
planethreat.position.set(0,-1.7, 0)
scene.add(planethreat);

const geometrythreat1 = new THREE.PlaneGeometry(1.6, 0.9);
const textureLoaderthreat1 = new THREE.TextureLoader();
const texturethreat1 = textureLoaderthreat1.load('./assets/threat.jpg');
const materialthreat1 = new THREE.MeshPhongMaterial({ map: texturethreat1,  transparent: true, opacity: 1 });
const planethreat1 = new THREE.Mesh(geometrythreat1, materialthreat1);
planethreat1.position.set(0,-1.7, -0.01)
planethreat1.rotation.y = Math.PI
scene.add(planethreat1);

tree();
grass1();
oak();
sofa();
wall_lamp();
ghost();


const listener = new THREE.AudioListener();
camera.add(listener); // Add listener to the camera

const audioLoader = new THREE.AudioLoader();
const sound = new THREE.Audio(listener); // Create an audio object

// audioLoader.load('./assets/music1.mp3', (buffer) => {
//   sound.setBuffer(buffer);
//   sound.setLoop(true); // Set to loop the sound
//   sound.setVolume(2); // Set volume
//   sound.play();
// });



const wallGeometry = new THREE.BoxGeometry(10, 1.25, 0.28); // Assuming width, height, depth
const textureLoaderwall = new THREE.TextureLoader();
const texturewall = textureLoaderwall.load('./assets/ground.jpg');
const wallMaterial = new THREE.MeshPhongMaterial({map: texturewall, color: 0xffffff, specular: 0xEBFFF9 , shininess: 20}); 
const wallMesh1 = new THREE.Mesh(wallGeometry, wallMaterial);
wallMesh1.position.set(0, 0.625, -5); // Position the wall
scene.add(wallMesh1);

const wallMesh2 = wallMesh1.clone()
wallMesh2.position.set(0, 0.625, 5)
scene.add(wallMesh2)

const wallMesh3 = wallMesh1.clone()
wallMesh3.position.set(-5, 0.625, 0)
wallMesh3.rotation.y = Math.PI/2
scene.add(wallMesh3)

const wallMesh4 = wallMesh1.clone()
wallMesh4.position.set(5, 0.625, 0)
wallMesh4.rotation.y = Math.PI/2
scene.add(wallMesh4)

const gap_from_wall = 0.7
const bglen = 1.5
const bgheight = 0.8
const bgthick = 0.08
const bgposx = 2.5 - gap_from_wall
const bgposy = bgheight/2
const bgposz = 2.5 - (gap_from_wall+bglen/2)

const bgGeometry = new THREE.BoxGeometry(2.4, bgheight, bgthick); // Assuming width, height, depth
const bgMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, specular: 0xEBFFF9 , shininess: 20}); 
const bgMesh = new THREE.Mesh(bgGeometry, bgMaterial);
bgMesh.position.set(0, bgposy, -(2.5 - gap_from_wall)); // Position the wall
scene.add(bgMesh);

const bgGeometry1 = new THREE.BoxGeometry(bglen, bgheight, bgthick); // Assuming width, height, depth
const bgMaterial1 = new THREE.MeshPhongMaterial({ color: 0xffffff, specular: 0xEBFFF9  , shininess: 20}); // Replace with your texture or material
const bgMesh1 = new THREE.Mesh(bgGeometry1, bgMaterial1);
bgMesh1.position.set(-(bgposx), bgposy, -(bgposz)); // Position the wall
bgMesh1.rotation.y = Math.PI/2
scene.add(bgMesh1);

const bgGeometry2 = new THREE.BoxGeometry(bglen, bgheight, bgthick); // Assuming width, height, depth
const bgMaterial2 = new THREE.MeshPhongMaterial({ color: 0xffffff, specular: 0xEBFFF9  , shininess: 20}); // Replace with your texture or material
const bgMesh2 = new THREE.Mesh(bgGeometry2, bgMaterial2);
bgMesh2.position.set(-(bgposx), bgposy, bgposz); // Position the wall
bgMesh2.rotation.y = Math.PI/2
scene.add(bgMesh2);

const bgGeometry3 = new THREE.BoxGeometry(bglen, bgheight, bgthick); // Assuming width, height, depth
const bgMaterial3 = new THREE.MeshPhongMaterial({ color: 0xffffff, specular: 0xEBFFF9  , shininess: 20}); // Replace with your texture or material
const bgMesh3 = new THREE.Mesh(bgGeometry3, bgMaterial3);
bgMesh3.position.set(bgposx, bgposy, -(bgposz)); // Position the wall
bgMesh3.rotation.y = Math.PI/2
scene.add(bgMesh3);

const bgGeometry4 = new THREE.BoxGeometry(bglen, bgheight, bgthick); // Assuming width, height, depth
const bgMaterial4 = new THREE.MeshPhongMaterial({ color: 0xffffff, specular: 0xEBFFF9  , shininess: 20}); // Replace with your texture or material
const bgMesh4 = new THREE.Mesh(bgGeometry4, bgMaterial4);
bgMesh4.position.set(bgposx, bgposy, bgposz); // Position the wall
bgMesh4.rotation.y = Math.PI/2
scene.add(bgMesh4);

const directionalLight = new THREE.DirectionalLight( 0xFFFFFF, 2 );
directionalLight.position.set(2, 2, 4);
scene.add( directionalLight );

const directionalLight2 = new THREE.DirectionalLight( 0xFFFFFF, 2 );
directionalLight2.position.set(-2, 2, -4);
scene.add( directionalLight2 );

const ambientLight = new THREE.AmbientLight(0xFFEAC6, 0.3); // White ambient light, 50% intensity
scene.add(ambientLight);



const artworks = [
  { image: './images/1adarsh.jpg', link: 'https://iamadarshmr.github.io/Portfolio/'},
  { image: './images/2adithya.jpg', link: 'https://adi-2023-psych.github.io/ADITHYA/' },
  { image: './images/3.jpg', link: 'https://aina-arun.github.io/Portfolio/'},
  { image: './images/4albin.jpg', link: 'https://albin00010.github.io/porto/'},
  { image: './images/5anandjith.jpg', link: 'https://anandjithtj.netlify.app'},
  { image: './images/6anirudh.jpg', link: 'https://anirudhvkumar.github.io/Potfolio/#contact'},
  { image: './images/7arunjith.jpg', link: 'https://arunjith.netlify.app/'},
  { image: './images/8dima.jpg', link: 'https://dimayunus.github.io/portfolio/'},
  { image: './images/9gautham.jpg', link: 'https://gauthampmanoj.github.io/pportfolio/'},
  { image: './images/10.jpg', link: 'https://sisyphusrollingstones.github.io/Portfolio/' },
  { image: './images/11hanna.jpg', link: 'https://hannaa18.github.io/'},
  { image: './images/12hrishikesh.jpg', link: 'https://hrishikeshvs.github.io/Personal-Portfolio-Website/'},
  { image: './images/13hrithik.jpg', link: 'https://hrithik-manoj.github.io'},
  { image: './images/14.jpg', link: 'https://github.com/jinocj/Portfolio.git'},
  { image: './images/15mathew.jpg', link: 'https://mathew-paul.github.io/MyPortfolio/'},
  { image: './images/16aryanandha.jpg', link: 'https://aryanandhakp66.github.io/'},
  { image: './images/17panchamy.jpg', link: 'https://panchamymt.github.io/MyPortfolio/'},
  { image: './images/18sana.jpg', link: 'https://sanaaranjith.github.io/Portfolio/portfolio%20demo/' },
  { image: './images/19santheri.jpg', link: 'https://santheri.github.io/'},
  { image: './images/20sooraj.jpg', link: 'https://suruzo.github.io/'},
  { image: './images/21antony.jpg', link: 'https://anthonyportfolio123.netlify.app'},
  { image: './images/22christopher.jpg', link: 'https://chritho.github.io/portfolio/'}
];

const artworkPositions = [
   [-1.75, 0.45, -1.425],
   [-1.75, 0.45, -0.675],
   [-1.75, 0.45, 1.425],
   [-1.75, 0.45, 0.675],
   [1.85, 0.45, -1.425],
   [1.85, 0.45, -0.675],
   [1.85, 0.45, 1.425],
   [1.85, 0.45, 0.675],
   [-1.85, 0.45, -1.425],
   [-1.85, 0.45, -0.675],
   [-1.85, 0.45, 1.425],
   [-1.85, 0.45, 0.675],
   [1.75, 0.45, -1.425],
   [1.75, 0.45, -0.675],
   [1.75, 0.45, 1.425],
   [1.75, 0.45, 0.675],
   [-0.7, 0.45, -1.85],
   [0, 0.45, -1.85],
   [0.7, 0.45, -1.85],
   [-0.7, 0.45, -1.75],
   [0, 0.45, -1.75],
   [0.7, 0.45, -1.75]
];


// Create planes and materials
const planes = [];
for (const artwork of artworks) {
  const geometry = new THREE.PlaneGeometry(0.45, 0.45);
  const texture = new THREE.TextureLoader().load(artwork.image);


  const material = new THREE.MeshPhongMaterial({ map: texture, color: 0xffffff,  shininess: 30, roughness: 10, emissive: 50 });
  const plane5 = new THREE.Mesh(geometry, material);

  // Position and rotate the plane on the wall
  planes.push(plane5);
  scene.add(plane5);
}

let i = 0
for (const pl of planes) {
  pl.position.set(artworkPositions[i][0], artworkPositions[i][1], artworkPositions[i][2])
  if(i<=7)
  {
    pl.rotation.y = Math.PI/2
  }
  else if(i<=15)
  {
    pl.rotation.y = -(Math.PI/2)
  }
  else if(i<=18)
  {
    pl.rotation.y = Math.PI
  }


  i++
}


// Raycaster for click detection
const raycaster = new THREE.Raycaster();

window.addEventListener('click', (event) => {
  const mouse = new THREE.Vector2(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1
  );

  

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children);

  if (intersects.length > 0) {
    const clickedObject = intersects[0].object;
    const artworkIndex = planes.indexOf(clickedObject);
    if (artworkIndex !== -1) {
      const link = artworks[artworkIndex].link;
      window.open(link, '_blank');
    }
  }
});

const skyboxGeometry = new THREE.BoxGeometry(100, 100, 100); // Large enough to encompass the scene
const skyboxMaterial = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./assets/sky1.png'), // Load your skybox texture
  side: THREE.BackSide // Render on the inside faces
}, (error) => {
  console.error("Error loading HDRI:", error);});
const skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
skybox.position.set(0,49.8,0)
scene.add(skybox)

const fog = new Fog(0xFFF7E4, 5, 60, 0.01); // White fog, starts at 1.5 units, fades out at 100 units
scene.fog = fog;

let angle =3
const radius = 3
let flag = 0

camera.position.y = 1

function animate() {
  // requestAnimationFrame(animate);

  if(angle<6.28)//6.28
  {
    angle += 0.015
    let camx = Math.sin(angle) * radius;
    let camz = Math.cos(angle) * radius;
    camera.position.x = camx;
    camera.position.z = camz;
  }
  
  else if(flag==0){
    camera.position.set(0, 1, 3);
    camera.updateProjectionMatrix()
    flag = 1
  }
  const maxDistance = 4
  const currentDistance = camera.position.length();
  if (currentDistance > maxDistance) {
    camera.position.setLength(maxDistance);
  }


  // window.addEventListener('keydown', (event) => {
  //   switch (event.key) {
  //     case 'ArrowUp':
  //       moveCameraUp();
  //       break;
  //     case 'ArrowDown':
  //       moveCameraDown();
  //       break;
  //     case 'ArrowLeft':
  //       moveCameraLeft();
  //       break;
  //     case 'ArrowRight':
  //       moveCameraRight();
  //       break;
  //   }
  // });
  
  // function moveCameraUp() {
  //   camera.position.z -= 0.0001; // Adjust movement speed here
  //   camera.updateProjectionMatrix();
  // }
  
  // function moveCameraDown() {
  //   camera.position.z += 0.0001;
  //   camera.updateProjectionMatrix();
  // }
  
  // function moveCameraLeft() {
  //   camera.position.x -= 0.0001;
  //   camera.updateProjectionMatrix();
  // }
  
  // function moveCameraRight() {
  //   camera.position.x += 0.0001;
  //   camera.updateProjectionMatrix();
  // }


  
  requestAnimationFrame(animate);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.render(scene, camera);
  controls.update();
}


function tree(){
  const loader = new GLTFLoader();
  loader.load('./Models/free_tree_1/scene.gltf', (gltf) => {
  // Success callback
  const tree1 = gltf.scene; // Extract the scene object from the gltf data
  tree1.scale.set(0.004, 0.004, 0.004);
  tree1.position.set(4, 0, 4)
  scene.add(tree1); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});

loader.load('./Models/free_tree_1/scene.gltf', (gltf) => {
  // Success callback
  const tree1 = gltf.scene; // Extract the scene object from the gltf data
  tree1.scale.set(0.004, 0.004, 0.004);
  tree1.position.set(-6, 0, -3)
  scene.add(tree1); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});

loader.load('./Models/free_tree_1/scene.gltf', (gltf) => {
  // Success callback
  const tree1 = gltf.scene; // Extract the scene object from the gltf data
  tree1.scale.set(0.007, 0.005, 0.006);
  tree1.position.set(7, 0, -13)
  scene.add(tree1); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});

loader.load('./Models/free_tree_1/scene.gltf', (gltf) => {
  // Success callback
  const tree1 = gltf.scene; // Extract the scene object from the gltf data
  tree1.scale.set(0.006, 0.004, 0.004);
  tree1.position.set(-4, 0, 4)
  scene.add(tree1); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});

loader.load('./Models/free_tree_1/scene.gltf', (gltf) => {
  // Success callback
  const tree1 = gltf.scene; // Extract the scene object from the gltf data
  tree1.scale.set(0.002, 0.002, 0.002);
  tree1.position.set(-8.5, 0, 0)
  scene.add(tree1); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});

loader.load('./Models/free_tree_1/scene.gltf', (gltf) => {
  // Success callback
  const tree1 = gltf.scene; // Extract the scene object from the gltf data
  tree1.scale.set(0.006, 0.006, 0.005);
  tree1.position.set(5, 0, -3)
  scene.add(tree1); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});
}

function grass1(){
  const loader1 = new GLTFLoader();
  loader1.load('./Models/grass/scene.gltf', (gltf) => {
  // Success callback
  const tree1 = gltf.scene; // Extract the scene object from the gltf data
  tree1.scale.set(0.00150, 0.00250, 0.00250);
  tree1.position.set(4, 0, 0.5)
  scene.add(tree1); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});

loader1.load('./Models/grass/scene.gltf', (gltf) => {
  // Success callback
  const tree1 = gltf.scene; // Extract the scene object from the gltf data
  tree1.scale.set(0.00150, 0.00250, 0.00250);
  tree1.position.set(6, 0, -0.5)
  scene.add(tree1); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});

loader1.load('./Models/grass/scene.gltf', (gltf) => {
  // Success callback
  const tree1 = gltf.scene; // Extract the scene object from the gltf data
  tree1.scale.set(0.00150, 0.00250, 0.00250);
  tree1.position.set(4, 0, -1.5)
  scene.add(tree1); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});

loader1.load('./Models/grass/scene.gltf', (gltf) => {
  // Success callback
  const tree1 = gltf.scene; // Extract the scene object from the gltf data
  tree1.scale.set(0.00150, 0.00250, 0.00250);
  tree1.position.set(6, 0, -2)
  scene.add(tree1); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});

loader1.load('./Models/grass/scene.gltf', (gltf) => {
  // Success callback
  const tree1 = gltf.scene; // Extract the scene object from the gltf data
  tree1.scale.set(0.00150, 0.00250, 0.00250);
  tree1.position.set(-2.7, 0, 4.5)
  scene.add(tree1); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});

loader1.load('./Models/grass/scene.gltf', (gltf) => {
  // Success callback
  const tree1 = gltf.scene; // Extract the scene object from the gltf data
  tree1.scale.set(0.00150, 0.00250, 0.00250);
  tree1.position.set(-1.5, 0, -7)
  scene.add(tree1); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});

loader1.load('./Models/grass/scene.gltf', (gltf) => {
  // Success callback
  const tree1 = gltf.scene; // Extract the scene object from the gltf data
  tree1.scale.set(0.00150, 0.00250, 0.00250);
  tree1.position.set(-4, 0, -1)
  scene.add(tree1); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});
}

function oak(){
  const loader2 = new GLTFLoader();
  loader2.load('./Models/beech_tree/scene.gltf', (gltf) => {
  // Success callback
  const tree2 = gltf.scene; // Extract the scene object from the gltf data
  tree2.scale.set(2, 2, 2);
  tree2.position.set(-1.5, 0, -8)
  scene.add(tree2); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});
}

function sofa(){  
  const loader2 = new GLTFLoader();
  loader2.load('./Models/sofa/scene.gltf', (gltf) => {
  // Success callback
  const tree2 = gltf.scene; // Extract the scene object from the gltf data
  tree2.scale.set(0.15, 0.5, 0.2);
  tree2.position.set(-1.1, 0, 1.2)
  scene.add(tree2); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});

loader2.load('./Models/sofa/scene.gltf', (gltf) => {
  // Success callback
  const tree2 = gltf.scene; // Extract the scene object from the gltf data
  tree2.scale.set(0.15, 0.5, 0.2);
  tree2.position.set(1.1, 0, 1.2)
  scene.add(tree2); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});

loader2.load('./Models/sofa/scene.gltf', (gltf) => {
  // Success callback
  const tree2 = gltf.scene; // Extract the scene object from the gltf data
  tree2.scale.set(0.15, 0.5, 0.25);
  tree2.position.set(0, 0, -1.1)
  tree2.rotation.y = Math.PI/2
  scene.add(tree2); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});


}

function ghost(){
  const loaderghost = new GLTFLoader();
  loaderghost.load('./Models/cloth_ghost/scene.gltf', (gltf1) => {
  // Success callback
  const ghost1 = gltf1.scene; // Extract the scene object from the gltf data
  ghost1.scale.set(0.7, 0.7, 0.7);
  ghost1.position.set(0,-2.2,0)
  scene.add(ghost1); // Add the model to the scene
  }, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
  });

  loaderghost.load('./Models/cloth_ghost/scene.gltf', (gltf1) => {
      // Success callback
      const ghost2 = gltf1.scene; // Extract the scene object from the gltf data
      ghost2.scale.set(0.6, 0.6, 0.6);
      ghost2.position.set(1, -2.9, -3)
      scene.add(ghost2); // Add the model to the scene
      }, (error) => {
      // Error callback
      console.error('Error loading gltf:', error);
      });

  loaderghost.load('./Models/cloth_ghost/scene.gltf', (gltf1) => {
      // Success callback
      const ghost2 = gltf1.scene; // Extract the scene object from the gltf data
      ghost2.scale.set(0.8, 0.8, 0.8);
      ghost2.position.set(-3, -2.65, 3)
      scene.add(ghost2); // Add the model to the scene
      }, (error) => {
      // Error callback
      console.error('Error loading gltf:', error);
      });

  loaderghost.load('./Models/cloth_ghost/scene.gltf', (gltf1) => {
      // Success callback
      const ghost2 = gltf1.scene; // Extract the scene object from the gltf data
      ghost2.scale.set(0.8, 0.8, 0.8);
      ghost2.position.set(3, -2.7, -3)
      scene.add(ghost2); // Add the model to the scene
      }, (error) => {
      // Error callback
      console.error('Error loading gltf:', error);
      });

  loaderghost.load('./Models/cloth_ghost/scene.gltf', (gltf1) => {
      // Success callback
      const ghost2 = gltf1.scene; // Extract the scene object from the gltf data
      ghost2.scale.set(0.56, 0.56, 0.56);
      ghost2.position.set(-2, -2.5, -1)
      scene.add(ghost2); // Add the model to the scene
      }, (error) => {
      // Error callback
      console.error('Error loading gltf:', error);
      });

  loaderghost.load('./Models/cloth_ghost/scene.gltf', (gltf1) => {
      // Success callback
      const ghost2 = gltf1.scene; // Extract the scene object from the gltf data
      ghost2.scale.set(0.6, 0.6, 0.6);
      ghost2.position.set(-1, -2.9, 2)
      scene.add(ghost2); // Add the model to the scene
      }, (error) => {
      // Error callback
      console.error('Error loading gltf:', error);
      });

  loaderghost.load('./Models/cloth_ghost/scene.gltf', (gltf1) => {
      // Success callback
      const ghost2 = gltf1.scene; // Extract the scene object from the gltf data
      ghost2.scale.set(0.75, 0.75, 0.75);
      ghost2.position.set(2, -2.9, 1.5)
      scene.add(ghost2); // Add the model to the scene
      }, (error) => {
      // Error callback
      console.error('Error loading gltf:', error);
      });
}

const light = new THREE.PointLight(0xFFEAC6, 0.08, 10); // White light, intensity 1, distance 5 units
light.position.set(-1.755, 0.725, -1.05); // Position inside the lamp model
scene.add(light);

const light2 = light.clone()
light2.position.set(-1.755, 0.725, 1.05)
scene.add(light2);

const light3 = light.clone()
light3.position.set(1.755, 0.725, -1.05)
scene.add(light3);

const light4 = light.clone()
light4.position.set(1.755, 0.725, 1.05)
scene.add(light4);

const light5 = light.clone()
light5.position.set(-1.855, 0.725, -1.05)
scene.add(light5);

const light6 = light.clone()
light6.position.set(-1.855, 0.725, 1.05)
scene.add(light6);

const light7 = light.clone()
light7.position.set(1.855, 0.725, -1.05)
scene.add(light7);

const light8 = light.clone()
light8.position.set(1.855, 0.725, 1.05)
scene.add(light8);

const light9 = light.clone()
light9.position.set(-0.35, 0.725, -1.75)
scene.add(light9);

const light10 = light.clone()
light10.position.set(0.35, 0.725, -1.75)
scene.add(light10);

const light11 = light.clone()
light11.position.set(-0.35, 0.725, -1.85)
scene.add(light11);

const light12 = light.clone()
light12.position.set(0.35, 0.725, -1.85)
scene.add(light12);




function wall_lamp()
{
  const loader3 = new GLTFLoader();
  loader3.load('./Models/lamp3/scene.gltf', (gltf) => {
  // Success callback
  const tree2 = gltf.scene; // Extract the scene object from the gltf data
  //tree2.scale.set(0.005, 0.005, 0.005);
  tree2.position.set(-1.755, 0.725, -1.05)
  tree2.rotation.y = Math.PI/2
  scene.add(tree2); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});

loader3.load('./Models/lamp3/scene.gltf', (gltf) => {
  // Success callback
  const tree2 = gltf.scene; // Extract the scene object from the gltf data
  //tree2.scale.set(0.005, 0.005, 0.005);
  tree2.position.set(-1.755, 0.725, 1.05)
  tree2.rotation.y = Math.PI/2
  scene.add(tree2); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});

loader3.load('./Models/lamp3/scene.gltf', (gltf) => {
  // Success callback
  const tree2 = gltf.scene; // Extract the scene object from the gltf data
  //tree2.scale.set(0.005, 0.005, 0.005);
  tree2.position.set(1.755, 0.725, -1.05)
  tree2.rotation.y = -Math.PI/2
  scene.add(tree2); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});

loader3.load('./Models/lamp3/scene.gltf', (gltf) => {
  // Success callback
  const tree2 = gltf.scene; // Extract the scene object from the gltf data
  //tree2.scale.set(0.005, 0.005, 0.005);
  tree2.position.set(1.755, 0.725, 1.05)
  tree2.rotation.y = -Math.PI/2
  scene.add(tree2); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});

loader3.load('./Models/lamp3/scene.gltf', (gltf) => {
  // Success callback
  const tree2 = gltf.scene; // Extract the scene object from the gltf data
  //tree2.scale.set(0.005, 0.005, 0.005);
  tree2.position.set(-1.855, 0.725, -1.05)
  tree2.rotation.y = -Math.PI/2
  scene.add(tree2); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});

loader3.load('./Models/lamp3/scene.gltf', (gltf) => {
  // Success callback
  const tree2 = gltf.scene; // Extract the scene object from the gltf data
  //tree2.scale.set(0.005, 0.005, 0.005);
  tree2.position.set(-1.855, 0.725, 1.05)
  tree2.rotation.y = Math.PI/2
  scene.add(tree2); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});

loader3.load('./Models/lamp3/scene.gltf', (gltf) => {
  // Success callback
  const tree2 = gltf.scene; // Extract the scene object from the gltf data
  //tree2.scale.set(0.005, 0.005, 0.005);
  tree2.position.set(1.855, 0.725, -1.05)
  tree2.rotation.y = Math.PI/2
  scene.add(tree2); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});

loader3.load('./Models/lamp3/scene.gltf', (gltf) => {
  // Success callback
  const tree2 = gltf.scene; // Extract the scene object from the gltf data
  //tree2.scale.set(0.005, 0.005, 0.005);
  tree2.position.set(1.855, 0.725, 1.05)
  tree2.rotation.y = Math.PI/2
  scene.add(tree2); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});

loader3.load('./Models/lamp3/scene.gltf', (gltf) => {
  // Success callback
  const tree2 = gltf.scene; // Extract the scene object from the gltf data
  //tree2.scale.set(0.005, 0.005, 0.005);
  tree2.position.set(-0.35, 0.725, -1.75)
  scene.add(tree2); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});

loader3.load('./Models/lamp3/scene.gltf', (gltf) => {
  // Success callback
  const tree2 = gltf.scene; // Extract the scene object from the gltf data
  //tree2.scale.set(0.005, 0.005, 0.005);
  tree2.position.set(0.35, 0.725, -1.75)
  scene.add(tree2); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});

loader3.load('./Models/lamp3/scene.gltf', (gltf) => {
  // Success callback
  const tree2 = gltf.scene; // Extract the scene object from the gltf data
  //tree2.scale.set(0.005, 0.005, 0.005);
  tree2.position.set(-0.35, 0.725, -1.85)
  tree2.rotation.y = Math.PI
  scene.add(tree2); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});

loader3.load('./Models/lamp3/scene.gltf', (gltf) => {
  // Success callback
  const tree2 = gltf.scene; // Extract the scene object from the gltf data
  //tree2.scale.set(0.005, 0.005, 0.005);
  tree2.position.set(0.35, 0.725, -1.85)
  tree2.rotation.y = Math.PI
  scene.add(tree2); // Add the model to the scene
}, (error) => {
  // Error callback
  console.error('Error loading gltf:', error);
}, (progress) => {
  // Progress callback (optional)
  console.log('Loading gltf progress:', progress.loaded, '/', progress.total);
});
}


animate();