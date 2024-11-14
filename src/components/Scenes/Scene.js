import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeScene = () => {
	const mountRef = useRef(null);
	const mouseRef = useRef(new THREE.Vector2(0, 0)); // Mouse position

	const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv; // Pass UV coordinates to the fragment shader
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

	const fragmentShader = `
    uniform sampler2D texture1;
    uniform vec2 mouse;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;

      // Calculate distance from the mouse position to the current fragment
      float dist = distance(uv, mouse);

      // Change perspective effect based on distance
      uv += normalize(uv - mouse) * (0.01 / dist); // Adjust the intensity as needed

      // Apply the texture with a perspective effect based on mouse position
      vec4 color = texture2D(texture1, uv);
      gl_FragColor = color;
    }
  `;

	useEffect(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		const renderer = new THREE.WebGLRenderer({ antialias: true });

		// Resize function to make canvas full width and height
		const setRendererSize = () => {
			const parent = mountRef.current;
			const width = parent.offsetWidth;
			const height = parent.offsetHeight;

			renderer.setSize(width, height); // Set the size of the renderer to fill the parent container
			camera.aspect = width / height; // Adjust camera aspect ratio
			camera.updateProjectionMatrix(); // Update the projection matrix to reflect the new aspect ratio
		};

		setRendererSize(); // Set initial size
		mountRef.current.appendChild(renderer.domElement); // Append renderer to the DOM

		const video = document.createElement("video");
		video.src = "./lookbookCover.mp4";
		video.loop = true;
		video.muted = true;
		video.autoplay = true;
		video.play();

		const texture = new THREE.VideoTexture(video);
		texture.minFilter = THREE.LinearFilter;
		texture.magFilter = THREE.LinearFilter;
		texture.format = THREE.RGBAFormat;

		const geometry = new THREE.PlaneGeometry(20, 15);
		const material = new THREE.ShaderMaterial({
			uniforms: {
				texture1: { value: texture },
				mouse: { value: mouseRef.current },
			},
			vertexShader,
			fragmentShader,
		});

		const plane = new THREE.Mesh(geometry, material);
		scene.add(plane);
		camera.position.z = 5;

		const onMouseMove = (event) => {
			const mouseX = event.clientX / window.innerWidth;
			const mouseY = 1 - event.clientY / window.innerHeight;
			mouseRef.current.set(mouseX, mouseY);
		};

		const handleResize = () => setRendererSize();

		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("resize", handleResize);

		const animate = () => {
			requestAnimationFrame(animate);
			material.uniforms.mouse.value.copy(mouseRef.current);
			renderer.render(scene, camera);
		};
		animate();

		return () => {
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("resize", handleResize);
			mountRef.current.removeChild(renderer.domElement);
		};
	}, []);

	return (
		<div
			className="canvas-container absolute -z-10 top-0 left-0 w-full"
			ref={mountRef}
			style={{
				height: "100%", // Make the parent container fill the parent height
				overflow: "hidden",
			}}
		/>
	);
};

export default ThreeScene;
