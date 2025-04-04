import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { FaPlay, FaPause } from "react-icons/fa";

const ProductCard = (props) => {
	let item = props.item;

	// Refs for animation
	const imageRef = useRef(null);
	const nameRef = useRef(null);

	// Audio state and refs
	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);
	const audioRef = useRef(null);

	useEffect(() => {
		// Staggered animation for all elements: fade in and move up
		gsap.fromTo(
			[imageRef.current, nameRef.current],
			{ opacity: 0, y: 20 }, // Starting point (hidden and slightly below)
			{
				opacity: 1,
				y: 0, // End position (fully visible and at the correct position)
				duration: 1,
				stagger: 0.3, // Stagger each element by 0.3s
			}
		);
	}, []);

	// Handle play/pause
	const handlePlayPause = () => {
		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};

	// Update progress bar as audio plays
	const handleTimeUpdate = () => {
		const progressPercentage = (audioRef.current.currentTime / audioRef.current.duration) * 100;
		setProgress(progressPercentage || 0);
	};

	// Reset progress and play state when audio ends
	const handleAudioEnd = () => {
		setIsPlaying(false);
		setProgress(0);
	};

	return (
		<div className="product-card flex flex-col items-center mt-10 mb-20">
			{/* Image with play button */}
			<div ref={imageRef} className="relative w-64 h-64 rounded-full overflow-hidden cursor-pointer" onClick={handlePlayPause}>
				<img className="w-full h-full object-cover" alt={item.product_name} src={item.url} />
				{/* Play/Pause button overlay */}
				<div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40">
					{isPlaying ? <FaPause className="text-black text-4xl" /> : <FaPlay className="text-black text-4xl" />}
				</div>
			</div>

			{/* Product name */}
			<div className="flex flex-col pt-2 text-center">
				<p ref={nameRef} className="text-lg">
					{item.product_name}
				</p>
				{/* More Info link */}
				<Link to={`/product/${item.id}`} className="italic hover:underline mt-2">
					More Info
				</Link>
			</div>

			{/* Audio player */}
			<audio ref={audioRef} src={item.audio} onTimeUpdate={handleTimeUpdate} onEnded={handleAudioEnd} />

			{/* Progress bar */}
			<div className="mt-4 w-full bg-gray-300 rounded-full h-1">
				<div style={{ width: `${progress}%` }} className="h-1 bg-black rounded-full transition-all"></div>
			</div>
		</div>
	);
};

export default ProductCard;
