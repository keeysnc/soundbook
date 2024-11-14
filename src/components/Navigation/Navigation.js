import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Menu from "./Menu";
import { Link } from "react-router-dom";

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
		<nav className="w-full bg-black text-white">
			<div className="container flex flex-row items-center align-center justify-between pt-2 pb-2 px-4 mx-auto text-base">
				<div className="flex flex-row" ref={logoRef}>
					<a href="/">
						<svg width="75" height="75" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
							{/* Inner Circle */}
							<circle cx="100" cy="100" r="70" stroke="white" strokeWidth="6" fill="none" />

							{/* Text Path Definition */}
							<defs>
								<path id="textPath" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
							</defs>

							{/* Rotating Text */}
							<text fontSize="30" fontFamily="Bebas" fill="white">
								<textPath
									href="#textPath"
									startOffset="0%"
									style={{
										animation: "rotateText 8s linear infinite",
									}}
								>
									THESOUNDBOOK
								</textPath>
							</text>

							<style>
								{`
                  text {
                    transform-origin: 100px 100px; /* Center the rotation */
                    animation: rotateText 8s linear infinite;
                  }

                  @keyframes rotateText {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                  }
                `}
							</style>
						</svg>
					</a>
				</div>
				<div ref={menuRef}>
					<Menu />
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
