import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ShaderCanvas = ({ imageUrl }) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		// Set up the scene, camera, and renderer
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
		renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(renderer.domElement);

		// Load the image as texture
		const textureLoader = new THREE.TextureLoader();
		const texture = textureLoader.load(imageUrl);

		// Create a plane geometry and apply the texture
		const geometry = new THREE.PlaneGeometry(10, 10);
		const material = new THREE.ShaderMaterial({
			uniforms: {
				uTexture: { type: "t", value: texture },
				uMouse: { type: "v2", value: new THREE.Vector2(0.5, 0.5) },
				uResolution: { type: "v2", value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
			},
			vertexShader: `
        varying vec2 vUv;
        varying float vDist;

        void main() {
          vUv = uv;
          vDist = distance(uv, vec2(0.5, 0.5));
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
			fragmentShader: `
        uniform sampler2D uTexture;
        uniform vec2 uMouse;
        uniform vec2 uResolution;
        varying vec2 vUv;
        varying float vDist;

        void main() {
          vec2 uv = vUv;
          vec2 mouse = uMouse / uResolution;
          float distortion = sin(vDist * 10.0) * 0.1;
          uv.x += distortion * (mouse.x - 0.5);
          uv.y += distortion * (mouse.y - 0.5);
          gl_FragColor = texture2D(uTexture, uv);
        }
      `,
			side: THREE.DoubleSide,
		});

		const plane = new THREE.Mesh(geometry, material);
		scene.add(plane);

		// Position the camera
		camera.position.z = 5;

		// Handle mouse move to update uMouse uniform
		const handleMouseMove = (event) => {
			material.uniforms.uMouse.value.x = event.clientX;
			material.uniforms.uMouse.value.y = event.clientY;
		};

		window.addEventListener("mousemove", handleMouseMove);

		// Resize the canvas on window resize
		const handleResize = () => {
			renderer.setSize(window.innerWidth, window.innerHeight);
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			material.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
		};

		window.addEventListener("resize", handleResize);

		// Animation loop
		const animate = () => {
			requestAnimationFrame(animate);
			renderer.render(scene, camera);
		};

		animate();

		// Cleanup on component unmount
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("resize", handleResize);
			renderer.dispose();
		};
	}, [imageUrl]);

	return <canvas ref={canvasRef} />;
};

export default ShaderCanvas;
