import { Controller } from "@hotwired/stimulus"
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TextureLoader } from "three";

// Connects to data-controller="threejs"
export default class extends Controller {
  connect() {
    console.log("hello")
    this.scene = new THREE.Scene()
    this.textureLoader = new THREE.TextureLoader()

    //Camera
    this.camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1,1000);
    this.camera.position.z = 5;
    this.camera.lookAt(0,0,0)
    this.renderer = new THREE.WebGL1Renderer( { antialias: true } );
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    //Shadow
    // this.renderer.shadowMap.enabled = true
    // this.renderer.shadowMap.type = THREE.PCFShadowMap;

    document.body.appendChild(this.renderer.domElement);


    this.ambientLight = new THREE.AmbientLight(0x999999);
    //Light 1
    // this.light = new THREE.DirectionalLight(0xffffff,1);
    // this.light.position.set(3,3,3)
    // this.light.castShadow = true
    // this.light.shadow.mapSize.width = 4098; // default
    // this.light.shadow.mapSize.height = 4098; // default
    // this.light.shadow.camera.near = 1; // default
    // this.light.shadow.camera.far = 10; // default
    // this.light.shadow.camera.right = 10;
		// this.light.shadow.camera.left = - 10;
		// this.light.shadow.camera.top	= 10;
		// this.light.shadow.camera.bottom = - 10;
    //Light 2
    // this.light2 = new THREE.DirectionalLight(0xffffff,1);
    // this.light2.position.set(-3,3,3)
    // this.light2.castShadow = true
    // this.light2.shadow.mapSize.width = 4098; // default
    // this.light2.shadow.mapSize.height = 4098; // default
    // this.light2.shadow.camera.near = 1; // default
    // this.light2.shadow.camera.far = 10; // default
    // this.light2.shadow.camera.right = 10;
		// this.light2.shadow.camera.left = - 10;
		// this.light2.shadow.camera.top	= 10;
		// this.light2.shadow.camera.bottom = - 10;

    this.scene.add(this.ambientLight)

     //Sphere
    this.geo = new THREE.SphereGeometry(0.3,256,256);
    this.textureSphere = this.textureLoader.load( '/assets/collection.png')
    this.bumpSphere = this.textureLoader.load( '/assets/collectionbump.png')
    this.displaceSphere = this.textureLoader.load( '/assets/collectiondisplace.png')
    this.material = new THREE.MeshStandardMaterial( {map: this.textureSphere, displacementMap: this.displaceSphere, displacementScale: 0.03})
    this.sphere = new THREE.Mesh(this.geo, this.material)
    // this.sphere.castShadow = true
    // this.sphere.receiveShadow = true
    this.sphere.position.set(0,-0.4,3)
    this.scene.add(this.sphere)

    this.starsGeometry = new THREE.BufferGeometry();
    this.starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
    this.starVertices = []
    for (let i=0; i<10000;i++){
      let x = (Math.random() - 0.5) * 2000
      let y = (Math.random() - 0.5) * 2000
      let z = -Math.random() * 2000
      this.starVertices.push(x, y, z)
      x = (Math.random() - 0.5) * 2000
      y = (Math.random() - 0.5) * 2000
      z =  Math.random() * 2000
      this.starVertices.push(x, y, z)

    }
    this.starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(this.starVertices, 3))
    this.stars = new THREE.Points(this.starsGeometry,this.starsMaterial)
    this.scene.add(this.stars)

    //Ground
    // this.geoGround = new THREE.BoxGeometry( 100, 0.15, 100 );
		// this.materialGround = new THREE.MeshStandardMaterial( {	color: 0xa0adaf } );

    // this.ground = new THREE.Mesh( this.geoGround, this.materialGround );
    // this.ground.scale.multiplyScalar( 3 );
    // this.ground.castShadow = false;
    // this.ground.receiveShadow = true;
    // this.ground.position.y = -1
    // this.scene.add( this.ground )


    //Create a helper for the shadow camera (optional)
    // this.helper = new THREE.CameraHelper( this.light.shadow.camera );
    // this.scene.add( this.helper );
    this.controls = new OrbitControls( this.camera, this.renderer.domElement );
    this.count = 0
    this.animate()
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.count += 1
    this.sphere.rotation.y -= 0.01
    if (this.count < 80) {
     this.sphere.material.displacementScale = 0.001
    } else if (this.count >= 80 && this.count<= 85) {
      this.sphere.material.displacementScale = 0.03
    } else if (this.count > 85){
      this.count = 0
    }
    this.renderer.render(this.scene, this.camera)
    }
}
