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
		<div className="product-card">
			<Link to={`/product/${item.id}`} relative="path">
				<div>
					<div className="ripple-effect">
						<img ref={imageRef} className="grayscale h-96 w-full object-cover object-top" alt={item.product_name} src={item.url} />
					</div>
					<div className="flex flex-col pt-2">
						<p ref={nameRef} className="text-lg font-semibold">
							{item.product_name}
						</p>
					</div>
				</div>
			</Link>

			{/* Audio player controls */}
			<div className="mt-2 flex items-center space-x-3">
				<audio ref={audioRef} src={item.audio} onTimeUpdate={handleTimeUpdate} onEnded={handleAudioEnd} />

				{/* Play/Pause Button */}
				<button onClick={handlePlayPause} className="play-pause-btn bg-black text-white p-2 rounded-full shadow-md">
					{isPlaying ? <FaPause /> : <FaPlay />}
				</button>

				{/* Progress bar */}
				<div className="w-full bg-gray-300 rounded-full h-1">
					<div style={{ width: `${progress}%` }} className="h-1 bg-black rounded-full transition-all"></div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
