import { Controller } from "@hotwired/stimulus"
import * as THREE from 'three';

// Connects to data-controller="threejs"
export default class extends Controller {
  connect() {
    console.log("hello s");
    this.scene = new THREE.Scene();

    this.renderer = new THREE.WebGL1Renderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.geometry = new THREE.BoxGeometry(4, 2, 0.1);
    this.textureLoader = new THREE.TextureLoader();
    this.texture = this.textureLoader.load('/assets/montre.png');
    this.material = new THREE.MeshStandardMaterial({ color: 0x00ff00, wireframe: false});

    this.cubeOne = this.creataCube(0,-3,4.5,0);
    this.cubeTwo = this.creataCube(10,-3,0,90);
    this.cubeThree = this.creataCube(0,-3,-4.5,0);
    this.cubeFour = this.creataCube(-10,-3,0,-90);

    this.pointLight = new THREE.PointLight(0xffffff);
    this.pointLight.position.set(0,200,-200)

    this.pointLight2 = new THREE.PointLight(0xffffff);
    this.pointLight2.position.set(200,200,200)

    this.pointLight3 = new THREE.PointLight(0xffffff);
    this.pointLight3.position.set(-200,200,200)

    this.scene.add(
                  this.cubeOne,
                  this.cubeTwo,
                  this.cubeThree,
                  this.cubeFour,
                  this.pointLight,
                  this.pointLight2,
                  this.pointLight3
                  )

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1,1000);
    this.camera.position.z = 0;
    this.camera.position.x = 20
    this.camera.position.z = 0;
    this.camera.rotation.y = 90


    this.renderer.render(this.scene, this.camera)
    // this.animate();
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    this.camera.rotation.y += 0.01

    // this.cubeOne.rotation.y += 0.01
    // this.cubeOne.rotation.z += 0.05

    this.renderer.render(this.scene, this.camera)
  }
  creataCube(x,y,z,a) {
    const cube = new THREE.Mesh(this.geometry,this.material);
    cube.position.set(x,y,z);
    cube.rotateY(a)
    cube.rotateX(0)
    return cube;
  }
}
