(function(){
    const width = window.innerWidth;
    const height = window.innerHeight;

    var screen = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 800 )
    var renderer = new THREE.WebGLRenderer();


    renderer.setSize(width,height);


    var cubeShape = new THREE.BoxGeometry(4,4,4);
    var cubeMetrial = new THREE.MeshBasicMaterial({
        color:0xff00ff
    })

    var cube = new THREE.Mesh(cubeShape,cubeMetrial);

    cube.position.x = 1;
    cube.position.y = 5;
    cube.position.z = -10;

    screen.add(cube);

    camera.position.z = 30

    document.body.appendChild(renderer.domElement);

    renderer.render(screen,camera)


    var animate = function () {

        requestAnimationFrame(animate);
        cube.rotation.x +=0.01;
        cube.rotation.y +=0.01;

        renderer.render(screen,camera)
    }


    animate()
})()