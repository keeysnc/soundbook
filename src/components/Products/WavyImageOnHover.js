import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const WavyImageOnHover = ({ item }) => {
	const mountRef = useRef(null);
	const uniforms = useRef({
		uTime: { value: 0 },
		uMouse: { value: new THREE.Vector2(0.5, 0.5) },
		uTexture: { value: null },
		uHoverStrength: { value: 0 },
	});

	const vertexShader = () => `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uHoverStrength;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    
    // Calculate the distance from the mouse to the vertex
    float distanceFromMouse = distance(uMouse, uv);

    // Use a sine function to create wave distortion based on time and distance
    float wave = sin(uTime + position.y * 10.0) * 0.1;
    wave *= uHoverStrength * (1.0 - distanceFromMouse);

    vec3 pos = position;
    pos.z += wave;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

	const fragmentShader = () => `
  uniform sampler2D uTexture;
  varying vec2 vUv;

  void main() {
    gl_FragColor = texture2D(uTexture, vUv);
  }
`;

	useEffect(() => {
		// Initialize Three.js scene, camera, and renderer
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);
		camera.position.z = 5;

		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(500, 500);
		mountRef.current.appendChild(renderer.domElement);

		// Load texture and create a plane with the texture
		const textureLoader = new THREE.TextureLoader();
		textureLoader.load(item.url, (texture) => {
			uniforms.current.uTexture.value = texture;

			const geometry = new THREE.PlaneGeometry(3, 2, 100, 100);
			const material = new THREE.ShaderMaterial({
				uniforms: uniforms.current,
				vertexShader: vertexShader(),
				fragmentShader: fragmentShader(),
			});

			const plane = new THREE.Mesh(geometry, material);
			scene.add(plane);
		});

		// Mouse move event to update hover strength and mouse position
		// const onMouseMove = (event) => {
		// 	uniforms.current.uMouse.value.x = event.clientX / window.innerWidth;
		// 	uniforms.current.uMouse.value.y = 1 - event.clientY / window.innerHeight;
		// 	uniforms.current.uHoverStrength.value = 1; // Wave intensity
		// };

		// const onMouseOut = () => {
		// 	uniforms.current.uHoverStrength.value = 0; // Reset wave when mouse leaves
		// };

		// window.addEventListener("mousemove", onMouseMove);
		// window.addEventListener("mouseout", onMouseOut);

		// Animation loop
		const animate = () => {
			uniforms.current.uTime.value += 0.05;
			renderer.render(scene, camera);
			requestAnimationFrame(animate);
		};
		animate();
	}, []);

	return <div ref={mountRef} />;
};

export default WavyImageOnHover;
