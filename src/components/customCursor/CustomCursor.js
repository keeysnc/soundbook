import React, { useEffect, useState } from "react";
import gsap from "gsap";

const CursorRing = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	// In the useEffect hook:
	useEffect(() => {
		const handleMouseMove = (e) => {
			gsap.to(".ring-cursor", { x: e.clientX, y: e.clientY, duration: 0.15, ease: "power3.out" });
		};
		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<>
			<div
				className="ring-cursor"
				style={{
					left: `${position.x}px`,
					top: `${position.y}px`,
				}}
			></div>
			{/* Other content */}
		</>
	);
};

export default CursorRing;
