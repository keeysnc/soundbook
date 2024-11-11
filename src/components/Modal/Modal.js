import React, { useEffect, useRef, useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
	const modalRef = useRef(null);
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

	// Function to handle mouse move and update mouse position
	const handleMouseMove = (e) => {
		const { clientX, clientY } = e;
		const { top, left, width, height } = modalRef.current.getBoundingClientRect();

		// Normalize the mouse position inside the modal
		const mouseX = ((clientX - left) / width) * 2 - 1; // Normalized -1 to 1
		const mouseY = ((clientY - top) / height) * 2 - 1; // Normalized -1 to 1

		setMousePos({ x: mouseX, y: mouseY });
	};

	// Add event listener on mount and clean up on unmount
	useEffect(() => {
		if (isOpen) {
			window.addEventListener("mousemove", handleMouseMove);
		} else {
			window.removeEventListener("mousemove", handleMouseMove);
		}

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, [isOpen]);

	// If modal is not open, return null
	if (!isOpen) return null;

	// Calculate the perspective effect based on the mouse position
	const perspectiveX = mousePos.x * 5; // Adjust multiplier to control strength
	const perspectiveY = mousePos.y * 5; // Adjust multiplier to control strength

	return (
		<div className="shadow-lg fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
			<div
				ref={modalRef}
				className="bg-transparent p-6 w-128 max-w-full relative"
				onClick={(e) => e.stopPropagation()}
				style={{
					transform: `perspective(1000px) rotateX(${perspectiveY}deg) rotateY(${perspectiveX}deg)`,
					transition: "transform 0.1s ease-out", // Smooth transition for perspective
				}}
			>
				<button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" onClick={onClose}>
					&times;
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
