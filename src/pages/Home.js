import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getProducts } from "../utils/utils";
import ThreeForthLayout from "../components/Layouts/ThreeForthLayout";
import Cover from "../components/Cover/Cover";
import Modal from "src/components/Modal/Modal";
import LookBookCard from "../components/Products/LookBookCard";
import Video from "../components/Video/Video";
import AudioPlayer from "src/components/AudioPlayer/AudioPlayer";

gsap.registerPlugin(ScrollTrigger);

const coverImg =
	"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2980&q=80";

const Home = () => {
	const [category, setCategory] = useState(null);
	const [attribute, setAttribute] = useState(null);
	const [productInfo, setProductInfo] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [playingAudioId, setPlayingAudioId] = useState(null);
	const products = getProducts();

	const videoRef = useRef(null);
	const fadeInRefs = useRef([]);
	fadeInRefs.current = [];

	const handleAudioControl = (productId, audioRef) => {
		if (playingAudioId && playingAudioId !== productId) {
			// Pause the previous audio
			const previousAudio = document.getElementById(`audio-${playingAudioId}`);
			previousAudio.pause();
			previousAudio.currentTime = 0; // Optionally reset to start
		}

		setPlayingAudioId(productId);

		if (audioRef.current.paused) {
			audioRef.current.play();
		} else {
			audioRef.current.pause();
			setPlayingAudioId(null); // Reset the state if audio is paused
		}
	};

	const addToRefs = (el) => {
		if (el && !fadeInRefs.current.includes(el)) {
			fadeInRefs.current.push(el);
		}
	};

	const handleCategorySort = (e) => {
		const selectedCategory = e.target.innerHTML;
		setCategory(selectedCategory);
	};

	const handleAttributeSort = (e) => {
		const selectedAttribute = e.target.value;
		setAttribute(selectedAttribute);
	};

	const mapProductsCards = products.map((item) => {
		if (category === item.category || category === null || category === "All" || item.sizes.includes(attribute)) {
			return (
				<div ref={addToRefs} className="opacity-0" key={item.id} onClick={() => setIsModalOpen(true)}>
					<LookBookCard audio={item.audio} handleAudioControl={handleAudioControl} playingAudioId={playingAudioId} item={item} />
				</div>
			);
		}
	});

	useEffect(() => {
		if (fadeInRefs.current.length > 0) {
			gsap.fromTo(
				fadeInRefs.current,
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					stagger: 0.2,
					ease: "power3.out",
					scrollTrigger: {
						trigger: fadeInRefs.current[0],
						start: "top 80%",
						end: "bottom 20%",
						toggleActions: "play none none none",
					},
				}
			);
		}

		if (videoRef.current) {
			gsap.fromTo(
				videoRef.current,
				{ scale: 1 },
				{
					scale: 1.05,
					duration: 1.5,
					ease: "power3.out",
					scrollTrigger: {
						trigger: videoRef.current,
						start: "top 80%",
						end: "bottom 20%",
						toggleActions: "play none none none",
					},
				}
			);
		}
	}, []);

	return (
		<div className="gridLines ">
			<Cover coverImg={coverImg} />

			<svg className="fixed top-0 right-[-150px] w-48 h-48 md:w-72 md:h-72 z-[110]" viewBox="0 0 200 200">
				<circle cx="100" cy="100" r="70" stroke="#a6a6a6" strokeWidth="1" fill="none" />
				<defs>
					<path id="textPath" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
				</defs>
				<text fontSize="8" fontFamily="Bebas" fill="#4b5563">
					<textPath href="#textPath" startOffset="0%" style={{ animation: "rotateText 8s linear infinite" }}>
						LET THE RIGHT SOUNDS FUEL YOUR FOCUS, PRODUCTIVITY AND CREATIVITY.
					</textPath>
				</text>
				<style>{`
          text {
            transform-origin: 100px 100px;
            animation: rotateText 8s linear infinite;
          }
          @keyframes rotateText {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
			</svg>
		</div>
	);
};

export default Home;
