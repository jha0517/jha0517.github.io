import * as THREE from 'three';

console.log("Three", THREE);

// run once html is finish compiling
document.addEventListener("DOMContentLoaded", ()=> {
	const scene = new THREE.Scene();
	const geometry = new THREE.BoxGeometry(1,1,1);
	const material = new THREE.MeshBasicMaterial({color: "#0000FF"});
	const cube = new THREE.Mesh(geometry, material);
	scene.add(cube);
	cube.position.set(0,0,-2);
	cube.rotation.set(0, Math.PI/4, 0);

	const camera = new THREE.PerspectiveCamera();
	camera.position.set(1, 1, 5);

	const renderer = new THREE.WebGLRenderer({alpha:true});
	renderer.setSize(500,500);
	renderer.render(scene, camera);

	const video = document.createElement("video");
	if (!navigator.mediaDevices){
		console.log("no")
	}
	else{
		console.log("yes")
	}
	if (!navigator.mediaDevices.getUserMedia){
		console.log("2no")
	}
	else{
		console.log("2yes")
	}
	navigator.mediaDevices.getUserMedia({video:true}).then((stream)=>{
		video.srcObject = stream;
		video.play();
	});
	// navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    // .then(localMediaStream => {
    //   if ('srcObject' in video) {
    //     video.srcObject = localMediaStream;
    //   } else {
    //     video.src = window.URL.createObjectURL(localMediaStream);
    //   }
    //   video.play();
    // })
    // .catch(err => {
    //   console.error(`Not available!!!!`, err);
    // });
	video.setAttribute('autoplay', '');
	video.setAttribute('muted', '');
	video.setAttribute('playsinline', '')
	video.style.position = "absolute";
	video.style.width = renderer.domElement.width;
	video.style.height = renderer.domElement.height;
	renderer.domElement.style.position = "absolute";

	document.body.appendChild(video);
	document.body.appendChild(renderer.domElement);
});