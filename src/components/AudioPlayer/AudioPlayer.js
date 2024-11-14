import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const AudioPlayer = () => {
	const audioFiles = [
		{ id: 1, title: "Ambient Rain", artist: "Nature Sounds", src: "/audio/ambient-rain.mp3" },
		{ id: 2, title: "Ocean Waves", artist: "Nature Sounds", src: "/audio/ocean-waves.mp3" },
		{ id: 3, title: "Forest Birds", artist: "Nature Sounds", src: "/audio/forest-birds.mp3" },
		{ id: 4, title: "Mountain Breeze", artist: "Nature Sounds", src: "/audio/mountain-breeze.mp3" },
		{ id: 5, title: "City Nights", artist: "Nature Sounds", src: "/audio/city-nights.mp3" },
		{ id: 6, title: "Calm River", artist: "Nature Sounds", src: "/audio/calm-river.mp3" },
	];

	const [currentAudio, setCurrentAudio] = useState(null);
	const [progress, setProgress] = useState(0);
	const audioRefs = useRef(audioFiles.map(() => React.createRef()));

	const handlePlayPause = (id) => {
		const selectedAudioRef = audioRefs.current[id - 1].current;
		if (currentAudio === id) {
			selectedAudioRef.pause();
			setCurrentAudio(null);
		} else {
			if (currentAudio !== null) {
				const prevAudioRef = audioRefs.current[currentAudio - 1].current;
				prevAudioRef.pause();
				prevAudioRef.currentTime = 0;
			}
			selectedAudioRef.play();
			setCurrentAudio(id);
		}
	};

	const handleTimeUpdate = (id) => {
		const audio = audioRefs.current[id - 1].current;
		const progressPercentage = (audio.currentTime / audio.duration) * 100;
		setProgress(progressPercentage || 0);
	};

	useEffect(() => {
		if (currentAudio) {
			const currentAudioRef = audioRefs.current[currentAudio - 1].current;
			const onEnded = () => setCurrentAudio(null);
			currentAudioRef.addEventListener("ended", onEnded);
			return () => currentAudioRef.removeEventListener("ended", onEnded);
		}
	}, [currentAudio]);

	return (
		<div className="container mx-auto p-4 space-y-6 max-w-lg">
			{audioFiles.map((audio) => (
				<div key={audio.id} className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md space-x-4">
					{/* Play/Pause Button */}
					<button onClick={() => handlePlayPause(audio.id)} className="text-green-600 bg-white p-2 rounded-full shadow-md">
						{currentAudio === audio.id ? <FaPause /> : <FaPlay />}
					</button>

					{/* Track Info */}
					<div className="flex-grow">
						<h3 className="text-md font-semibold text-gray-900">{audio.title}</h3>
						<p className="text-sm text-gray-500">{audio.artist}</p>
						<audio ref={audioRefs.current[audio.id - 1]} src={audio.src} onTimeUpdate={() => handleTimeUpdate(audio.id)} />
						{/* Progress Bar */}
						<div className="w-full bg-gray-300 rounded-full h-1 mt-2">
							<div style={{ width: `${currentAudio === audio.id ? progress : 0}%` }} className="h-1 bg-green-600 rounded-full transition-all"></div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default AudioPlayer;
