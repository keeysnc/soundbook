import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeScene = () => {
	const mountRef = useRef(null);

	const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

	const fragmentShader = `
    uniform sampler2D texture1;
    uniform vec2 mouse;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      float dist = distance(uv, mouse);
      // Prevent divide-by-zero issues + clamp distortion effect
      dist = max(dist, 0.001);
      uv += normalize(uv - mouse) * (0.005 / dist); // Reduced distortion intensity
      gl_FragColor = texture2D(texture1, uv);
    }
  `;

	useEffect(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		camera.position.z = 5;

		const renderer = new THREE.WebGLRenderer({ antialias: false }); // Disable antialiasing for faster render
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio for performance
		renderer.setSize(window.innerWidth, window.innerHeight);
		mountRef.current.appendChild(renderer.domElement);

		// Setup video
		const video = document.createElement("video");
		video.src = "/lookbookCover.mp4";
		video.loop = true;
		video.muted = true;
		video.playsInline = true;

		video.addEventListener("canplaythrough", () => {
			video.play();
		});

		// Texture setup
		const texture = new THREE.VideoTexture(video);
		texture.minFilter = THREE.LinearFilter;
		texture.magFilter = THREE.LinearFilter;
		texture.format = THREE.RGBAFormat;
		texture.colorSpace = THREE.SRGBColorSpace;
		texture.generateMipmaps = false;

		// Geometry and shader
		const geometry = new THREE.PlaneGeometry(20, 15);
		const mouseUniform = new THREE.Vector2(0.5, 0.5);
		const material = new THREE.ShaderMaterial({
			uniforms: {
				texture1: { value: texture },
				mouse: { value: mouseUniform },
			},
			vertexShader,
			fragmentShader,
		});

		const plane = new THREE.Mesh(geometry, material);
		scene.add(plane);

		// Resize handler (debounced for performance)
		let resizeTimeout;
		const handleResize = () => {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(() => {
				const width = window.innerWidth;
				const height = window.innerHeight;
				renderer.setSize(width, height);
				camera.aspect = width / height;
				camera.updateProjectionMatrix();
			}, 100); // Delay to avoid rapid resize spam
		};

		// Mouse move (throttled using requestAnimationFrame)
		let mouseMovePending = false;
		const mouseMoveTarget = new THREE.Vector2();
		const handleMouseMove = (e) => {
			mouseMoveTarget.set(e.clientX / window.innerWidth, 1 - e.clientY / window.innerHeight);
			if (!mouseMovePending) {
				mouseMovePending = true;
				requestAnimationFrame(() => {
					mouseUniform.copy(mouseMoveTarget);
					mouseMovePending = false;
				});
			}
		};

		window.addEventListener("resize", handleResize);
		window.addEventListener("mousemove", handleMouseMove);

		// Animation loop
		const animate = () => {
			requestAnimationFrame(animate);

			if (video.readyState >= video.HAVE_CURRENT_DATA) {
				texture.needsUpdate = true;
			}

			renderer.render(scene, camera);
		};
		animate();

		// Cleanup
		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("mousemove", handleMouseMove);
			mountRef.current.removeChild(renderer.domElement);
		};
	}, []);

	return <div ref={mountRef} className="absolute top-0 left-0 w-full h-screen -z-10" />;
};

export default ThreeScene;
