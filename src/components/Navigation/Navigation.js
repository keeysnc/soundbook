import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Menu from "./Menu";

const Navigation = () => {
	const logoRef = useRef(null);
	const menuRef = useRef(null);

	useEffect(() => {
		// Fade in the logo and menu items (not the background)
		gsap.fromTo(
			[logoRef.current, menuRef.current],
			{
				opacity: 0, // Initially invisible
				y: 20, // Start slightly below
			},
			{
				opacity: 1, // Fade to fully visible
				y: 0, // Move to normal position
				duration: 1, // Duration of the animation
				stagger: 0.2, // Stagger the fade-in
				ease: "power3.out", // Smooth easing
			}
		);
	}, []);

	return (
		<nav className="w-full text-[white]">
			<div className="container flex flex-row items-center align-center justify-between pt-2 pb-2 px-4 mx-auto text-base">
				<div className="flex flex-row" ref={logoRef}>
					<a href="/">Eightypercentcacao</a>
				</div>
				<div ref={menuRef}>
					<Menu />
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
