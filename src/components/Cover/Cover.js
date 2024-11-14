import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { coverStyles } from "./coverStyles";
import Scene from "../Scenes/Scene";

gsap.registerPlugin(ScrollTrigger);

const Cover = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Check if the screen width is less than 768px (mobile breakpoint)
		const handleResize = () => setIsMobile(window.innerWidth < 768);
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

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

	const textRefs = useRef([]);
	textRefs.current = [];

	const addToRefs = (el) => {
		if (el && !textRefs.current.includes(el)) {
			textRefs.current.push(el);
		}
	};

	const filteredHeroContent = isMobile ? heroContent.filter((item) => ![2, 3, 4, 6].includes(item.id)) : heroContent;

	const heroGrid = filteredHeroContent.map((i) => (
		<div ref={addToRefs} className={`p-10 text-white smallGridLines ${i.class || ""}`} key={i.id}>
			{i.id === 1 && <p>{i.text}</p>}
			{i.id === 5 && i.text}
			{i.id === 7 && <p>{i.text}</p>}
		</div>
	));

	useEffect(() => {
		if (textRefs.current.length > 0) {
			gsap.fromTo(
				textRefs.current,
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					stagger: 0.1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: textRefs.current[0],
						start: "top 80%",
						end: "bottom 20%",
						toggleActions: "play none none none",
					},
				}
			);
		}
	}, []);

	return (
		<div className="gridCircle w-full relative min-h-screen">
			<div className={`${coverStyles.gridContainer} ${isMobile ? "" : "pt-[130px]"} gridLines relative bottom-0 grid-flow-*`}>{heroGrid}</div>
			<Scene />
		</div>
	);
};

export default Cover;
