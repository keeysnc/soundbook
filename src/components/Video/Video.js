import React, { useRef } from "react";

import { videoStyles } from "./videoStyles";

const FullScreenVideo = ({ src }) => {
	const videoRef = useRef(null);

	const playVideo = () => {
		videoRef.current.play();
	};

	const pauseVideo = () => {
		videoRef.current.pause();
	};

	const stopVideo = () => {
		videoRef.current.pause();
		videoRef.current.currentTime = 0;
	};

	return (
		<div className={videoStyles.video_container}>
			<video autoPlay muted loop ref={videoRef} className={videoStyles.video} src={src} controls={false} />
			{/* <div className={videoStyles.controls}>
				<button className={videoStyles.button} onClick={playVideo}>
					Play
				</button>
				<button className={videoStyles.button} onClick={pauseVideo}>
					Pause
				</button>
				<button className={videoStyles.button} onClick={stopVideo}>
					Stop
				</button>
			</div> */}
		</div>
	);
};

export default FullScreenVideo;
