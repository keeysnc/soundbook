import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
	console.log(props);
	const item = props.item;
	const audioRef = useRef(null); // Reference to the audio element
	const [isPlaying, setIsPlaying] = useState(false); // Track the play/pause state

	// Handle play and pause toggle
	const toggleAudio = () => {
		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setIsPlaying(!isPlaying); // Toggle the state
	};

	// Handle volume change
	const handleVolumeChange = (e) => {
		audioRef.current.volume = e.target.value;
	};

	const getProduct = () => {
		const product = {
			id: item.product_id,
			product_name: item.product_name,
			product_url: item.url,
			product_price: item.price,
		};
		// Handle any other logic here, like opening a modal or something else
	};

	return (
		<Link onClick={getProduct} relative="path" className={`${item.product_id % 3 === 0 ? "col-span-2" : "col-span-1"}`}>
			<div>
				<div className="ripple-effect">
					<img className="grayscale h-full w-full object-cover object-top" alt={item.product_name} src={item.url} />
					<br />
					<i>
						<small>{item.category}</small>
					</i>
				</div>

				<div className="rounded-lg flex flex-row justify-between pt-2">
					<p>{item.product_name}</p>
				</div>

				{/* Custom Audio Controls */}
				<div className="mt-2">
					{/* Play/Pause Button */}
					<button onClick={toggleAudio} className="italic underline">
						{isPlaying ? "Pause" : "Play"}
					</button>

					{/* Volume Control */}
					<div className="flex items-center mt-2">
						<label htmlFor="volume" className="mr-2 text-black mr-2">
							Volume
						</label>
						{/* Styled Volume Slider */}
						<input
							type="range"
							id="volume"
							min="0"
							max="1"
							step="0.01"
							defaultValue="1"
							onChange={handleVolumeChange}
							className="w-24 h-1 bg-black rounded-lg appearance-none cursor-pointer"
						/>
					</div>
				</div>

				{/* Audio Element */}
				<audio loop ref={audioRef} src={props.audio ? props.audio : null} />
			</div>
		</Link>
	);
};

export default ProductCard;
