const THREE = window.MINDAR.IMAGE;

console.log("Three", THREE);
document.addEventListener("DOMContentLoaded", () => {
    const start = async() => {
        const mindarThree = new window.MINDAR.IMAGE.MindARThree({
            container: document.body,
            imageTargetSrc: "./assets/mind/targets.mind",
        });

        const { renderer, scene, camera } = mindarThree;

        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5 });
        const plane = new THREE.Mesh(geometry, material);

        const ancher = mindarThree.addAnchor(0);
        ancher.group.add(plane);
        
        await mindarThree.start();

        renderer.setAnimationLoop(() => {
            renderer.render(scene, camera);
        });
    }
    start();
});