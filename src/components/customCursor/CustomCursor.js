import React, { useEffect, useState } from "react";

const CustomCursor = () => {
	const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e) => {
			setCursorPos({
				x: e.clientX,
				y: e.clientY,
			});
		};

		// Add event listener for mouse movement
		window.addEventListener("mousemove", handleMouseMove);

		// Cleanup on component unmount
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div>
			<div
				className="cursor-ring"
				style={{
					left: `${cursorPos.x}px`,
					top: `${cursorPos.y}px`,
				}}
			></div>
		</div>
	);
};

export default CustomCursor;
