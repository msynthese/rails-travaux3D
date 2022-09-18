console.log("hello s2");
    this.scene = new THREE.Scene();


    this.renderer = new THREE.WebGL1Renderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.textureLoader = new THREE.TextureLoader()

    this.camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1,1000);
    this.camera.position.z = 15;


    // this.geoPlane = new THREE.PlaneGeometry(4,4)
    // this.texturePlane = new THREE.TextureLoader().load('/assets/franck.jpg')
    // this.materialPlane = new THREE.MeshBasicMaterial({ map: this.texturePlane});
    // this.plane = new THREE.Mesh(this.geoPlane,this.materialPlane)
    // this.plane.position.set(0,3,0)
    // this.scene.add(this.plane)





    // textureLoader.load( '/assets/montre.png', function(texturePlane) {
    //   plane.material.map = texturePlane
    // } );


    this.textureCube = new THREE.TextureLoader().load('/assets/montre.png')
    this.materialCube = new THREE.MeshBasicMaterial( { map: this.textureCube});
    this.cube = new THREE.Mesh(this.geoCube,this.materialCube)
    this.cube.position.set(0,-3,3)
    this.scene.add(this.cube)

    this.geoCube2 = new THREE.SphereGeometry(1);
    this.textureCube2 = new THREE.TextureLoader().load('/assets/robot.jpg')
    this.materialCube2 = new THREE.MeshStandardMaterial( { map: this.textureCube2});
    this.cube2 = new THREE.Mesh(this.geoCube2,this.materialCube2)
    this.cube2.position.set(5,-3,0)
    this.scene.add(this.cube2)



    this.geoSphere = new THREE.SphereGeometry(0.1);
    this.materialSphere = new THREE.MeshStandardMaterial( { color: 0xff0000});
    this.sphere = new THREE.Mesh(this.geoSphere,this.materialSphere)
    this.sphere.position.set(0,-4.5,3)
    this.scene.add(this.sphere)
    // const cubeOne = new THREE.Mesh(
    //   new THREE.BoxGeometry(3, 3, 3),
    //   materialCubeOne
    // )
    // cubeOne.position.set(0,-3,4.5)
    // const cubeTwo = this.creataCube(10,-3,0);
    // const cubeThree = this.creataCube(0,-3,-4.5);
    // const cubeFour = this.creataCube(-10,-3,0);


    this.ambientLight = new THREE.AmbientLight(0x999999);
    this.pointLight = new THREE.PointLight(0xffffff);
    this.pointLight.position.set(0,200,0)
    this.scene.add(this.pointLight, this.ambientLight)

    // this.pointLight2 = new THREE.PointLight(0xffffff);
    // this.pointLight2.position.set(0,-3,15)

    // this.pointLight3 = new THREE.PointLight(0xffffff);
    // this.pointLight3.position.set(-200,200,200)

    // scene.add(
    //         cubeOne,
    //         cubeTwo,
    //         cubeThree,
    //         cubeFour,
    //         )



    // this.renderer.render(this.scene, this.camera)
    this.animate();
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.cube2.rotation.y += 0.02
    this.cube.rotation.y += 0.02
    this.sphere.rotation.y += 0.01

    // this.cubeOne.rotation.y += 0.01
    // this.cubeOne.rotation.z += 0.05

    this.renderer.render(this.scene, this.camera)
  }
  creataCube(x,y,z) {
    const geometry = new THREE.BoxGeometry(3, 3, 3);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false} );
    const cubes = new THREE.Mesh(geometry,material);
    cubes.position.set(x,y,z);
    return cubes;
  }
}
