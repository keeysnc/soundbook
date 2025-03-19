import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const PageTransition = () => {
	const containerRef = useRef(null);
	const animationRef = useRef(null);

	useEffect(() => {
		let renderer, scene, camera, material, plane;
		let time = 0;

		const init = () => {
			// Set up renderer
			renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
			renderer.setSize(window.innerWidth, window.innerHeight);
			containerRef.current.appendChild(renderer.domElement);

			// Set up scene
			scene = new THREE.Scene();

			// Set up camera
			camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
			camera.position.z = 2;

			// Load texture
			const textureLoader = new THREE.TextureLoader();
			const texture = textureLoader.load("https://example.com/your-image.jpg");

			// Shader material for distortion
			material = new THREE.ShaderMaterial({
				uniforms: {
					uTime: { value: 0 },
					uTexture: { value: texture },
					uDistortionIntensity: { value: 0.3 }, // Adjust for stronger distortion
				},
				vertexShader: `
          uniform float uTime;
          uniform float uDistortionIntensity;
          varying vec2 vUv;

          void main() {
            vUv = uv;

            // Distortion effect
            vec3 pos = position;
            pos.z += sin(pos.y * 10.0 + uTime * 2.0) * uDistortionIntensity;
            pos.x += sin(pos.y * 5.0 + uTime * 2.0) * uDistortionIntensity;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
				fragmentShader: `
          uniform sampler2D uTexture;
          uniform float uTime;
          varying vec2 vUv;

          void main() {
            vec2 uv = vUv;

            // Adding time-based distortion
            vec4 color = texture2D(uTexture, uv);
            gl_FragColor = color;
          }
        `,
			});

			// Create plane geometry with shader material
			const geometry = new THREE.PlaneGeometry(1.5, 1, 32, 32);
			plane = new THREE.Mesh(geometry, material);
			scene.add(plane);
		};

		const animate = () => {
			time += 0.05; // Controls speed
			material.uniforms.uTime.value = time;
			renderer.render(scene, camera);
			animationRef.current = requestAnimationFrame(animate);
		};

		const handleResize = () => {
			renderer.setSize(window.innerWidth, window.innerHeight);
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
		};

		init();
		animate();
		window.addEventListener("resize", handleResize);

		return () => {
			cancelAnimationFrame(animationRef.current);
			window.removeEventListener("resize", handleResize);
			renderer.dispose();
			scene.remove(plane);
		};
	}, [fragmentShader, vertexShader]);

	return <div ref={containerRef} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 999 }} />;
};

export default PageTransition;
