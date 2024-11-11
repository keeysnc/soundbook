import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { coverStyles } from "./coverStyles";
import Scene from "../Scenes/Scene";

gsap.registerPlugin(ScrollTrigger);

const Cover = () => {
	const heroContent = [
		{
			id: 1,
			text: (
				<p>
					Let the gentle flow of{" "}
					<i>
						<b>ambient sounds</b>
					</i>{" "}
					wash over you,
					<b>
						{" "}
						<i>unlocking peace and boosting productivity</i>
					</b>
					.
				</p>
			),
		},
		{ id: 2, text: "", label: "logo" },
		{ id: 3, text: "", class: "col-span-2" },
		{ id: 4, text: "", label: "logo" },
		{
			id: 5,
			text: (
				<>
					<h1>
						<b>
							Embrace <i>calm and balance</i> with the transformative power of soothing sounds.
						</b>
					</h1>
					<br />
					<br />
					<p className="textUnderline text-[16px]">Digital Soundbook Curation [2024]</p>
					<b>
						<p className="italic text-[16px]">
							Curated with lofi beat produced by{" "}
							<a
								target="_blank"
								className="underline cursor-pointer"
								href="https://open.spotify.com/artist/5e8tG9jOxUPyK6IOQ3ZDSg?si=BOAgRKf9Tb-Y2mtLrkERzQ"
							>
								80% Cacao
							</a>
						</p>
					</b>
				</>
			),
		},
		{ id: 6, text: "", class: "col-span-3" },
		{
			id: 7,
			text: (
				<p>
					<i>
						<b>Ambient sounds</b>
					</i>{" "}
					create a soothing backdrop that drowns out distractions, helping you to focus deeply and sustain your energy throughout the day. Whether
					it's the rustling of leaves, gentle rain, or soft instrumentals, these sounds engage your mind just enough to ease stress, inspire
					creativity, and promote a steady, productive rhythm.
				</p>
			),
		},
	];

	// Add refs for each text element to animate them
	const textRefs = useRef([]);
	textRefs.current = [];

	// Helper function to add elements to refs array
	const addToRefs = (el) => {
		if (el && !textRefs.current.includes(el)) {
			textRefs.current.push(el);
		}
	};

	// Mapping over the heroContent array to render the content
	const heroGrid = heroContent.map((i) => {
		return (
			<div ref={addToRefs} className={`p-10 text-white smallGridLines ${i.class && i.class}`} key={i.id}>
				{i.id === 1 && <p>{i.text}</p>}
				{i.id === 5 && i.text}
				{i.id === 7 && <p>{i.text}</p>}
			</div>
		);
	});

	// GSAP animation effect on scroll
	useEffect(() => {
		// Staggered fade-in animation for all text elements
		if (textRefs.current.length > 0) {
			gsap.fromTo(
				textRefs.current,
				{
					opacity: 0, // Start with opacity 0
					y: 30, // Start 30px below the original position
				},
				{
					opacity: 1, // Fade in
					y: 0, // Return to original position
					duration: 1, // Duration for each element's fade-in
					stagger: 0.1, // Stagger the fade-in for each element with a 0.3s delay
					ease: "power3.out",
					scrollTrigger: {
						trigger: textRefs.current[0], // Trigger animation when the first text element enters the viewport
						start: "top 80%", // Animation starts when the top of the first text element is 80% visible
						end: "bottom 20%", // Optional: end animation when the bottom of the element is 20% visible
						toggleActions: "play none none none", // Play the animation once
					},
				}
			);
		}
	}, []);

	return (
		<div className="gridCircle w-full relative">
			<div className={`${coverStyles.gridContainer} pt-[130px] gridLines relative grid-flow-* `}>{heroGrid}</div>
			<Scene />
		</div>
	);
};

export default Cover;
