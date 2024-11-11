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
		// Basic setup
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		const renderer = new THREE.WebGLRenderer({ antialias: true });

		renderer.setSize(window.innerWidth, window.innerHeight);
		mountRef.current.appendChild(renderer.domElement); // Append the renderer to the DOM

		// Load the video
		const video = document.createElement("video");
		video.src = "./lookbookCover.mp4"; // Replace with your video path
		video.loop = true;
		video.muted = true;
		video.autoplay = true;
		video.play(); // Ensure it starts playing automatically

		// Create a video texture
		const texture = new THREE.VideoTexture(video);
		texture.minFilter = THREE.LinearFilter;
		texture.magFilter = THREE.LinearFilter;
		texture.format = THREE.RGBAFormat;

		// Create a plane geometry and apply the video texture with shaders
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

		// Set camera position
		camera.position.z = 5;

		// Mouse movement handler
		const onMouseMove = (event) => {
			// Normalize mouse position to a range between 0 and 1
			const mouseX = event.clientX / window.innerWidth;
			const mouseY = 1 - event.clientY / window.innerHeight; // Y coordinate is inverted in WebGL

			// Update mouse position uniform
			mouseRef.current.set(mouseX, mouseY);
		};

		// Add mouse move listener
		window.addEventListener("mousemove", onMouseMove);

		// Animation loop
		const animate = () => {
			requestAnimationFrame(animate);
			material.uniforms.mouse.value.copy(mouseRef.current); // Update mouse uniform
			renderer.render(scene, camera);
		};
		animate();

		// Clean up on component unmount
		return () => {
			window.removeEventListener("mousemove", onMouseMove);
			mountRef.current.removeChild(renderer.domElement); // Clean up renderer
		};
	}, []);

	return <div className="canvas-container absolute -z-10 top-0" ref={mountRef} />; // Render the ref container for the Three.js scene
};

export default ThreeScene;
