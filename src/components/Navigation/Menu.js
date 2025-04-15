import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSpotify, faInstagram, faBandcamp, faSoundcloud } from "@fortawesome/free-brands-svg-icons";

const Menu = () => {
	return (
		<div className="flex flex-row justify-between w-full">
			<ul className="flex flex-row space-x-4 gap-2">
				<li>
					<a href="https://open.spotify.com/artist/5e8tG9jOxUPyK6IOQ3ZDSg?si=52u4lU3LR46HLddXHqVkLQ" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faSpotify} className="text-white text-3xl hover:opacity-75 transition-opacity duration-200" />
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/80percentcacao/?hl=en" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faInstagram} className="text-white text-3xl hover:opacity-75 transition-opacity duration-200" />
					</a>
				</li>
				<li>
					<a href="https://80cacao.bandcamp.com/music" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faBandcamp} className="text-white text-3xl hover:opacity-75 transition-opacity duration-200" />
					</a>
				</li>
				<li>
					<a href="https://soundcloud.com/80cacaopercentmusic" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faSoundcloud} className="text-white text-3xl hover:opacity-75 transition-opacity duration-200" />
					</a>
				</li>
				<li>
					<a href="https://80cacao.bandcamp.com/music" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faShoppingCart} className="text-white text-3xl hover:opacity-75 transition-opacity duration-200" />
					</a>
				</li>
				<li>
					<a
						href="https://soundbetter.com/profiles/601905-nate-keeys"
						rel="noopener noreferrer"
						target="_blank"
						title="Nate Keeys profile on SoundBetter"
					>
						<div style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
							<img
								alt="Nate Keeys, Producer on SoundBetter"
								src="https://d2p6ecj15pyavq.cloudfront.net/assets/SoundBetterBadge-c84cb3e75c4267f5bee41f7f617a81d9.svg"
								style={{ width: "33px", color: "white" }}
							/>
						</div>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
