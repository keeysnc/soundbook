import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSpotify, faInstagram, faBandcamp, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import ThreeScene from "../components/Scenes/Scene";

const Shop = () => {
	return (
		<div>
			<div className="container px-4 pt-20 pb-20 mx-auto flex flex-col">
				<section>
					<h1 style={{ padding: "10px" }}>Music Producer + Songwriter</h1>
				</section>
				<hr />
				<section style={{ paddingTop: "2rem" }}>
					<p>
						80% Cacao is a multi-instrumentalist, producer, and songwriter. His music is greatly influenced by ambient and airy sounds which he fuses
						with soulful guitar and live percussion. 80% takes a creative approach to making music by recording and experimenting with live
						instrumentation and percussion from his home studio.
					</p>
				</section>
				<br />
				<br />
				<section className="album-list">
					<ul>
						<li>
							<a target="_blank" rel="noopener noreferrer" href="https://80cacao.bandcamp.com/album/it-was-like-floating">
								<span>2024 </span> <span>it was like floating</span>
								<span> Purchase Album</span>
							</a>
						</li>
						<li>
							<a target="_blank" rel="noopener noreferrer" href="https://80cacao.bandcamp.com/album/narnia">
								<span>2023</span> <span>Narnia</span>
								<span> Purchase Album</span>
							</a>
						</li>
						<li>
							<a target="_blank" rel="noopener noreferrer" href="https://80cacao.bandcamp.com/album/luma">
								<span>2022</span>
								<span>Luma</span>
								<span>Purchase Album</span>
							</a>
						</li>
					</ul>
				</section>

				{/* Social Media Links */}
				<div className="flex justify-center mt-8 gap-10">
					<a href="https://open.spotify.com/artist/5e8tG9jOxUPyK6IOQ3ZDSg?si=52u4lU3LR46HLddXHqVkLQ" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faSpotify} className="text-white text-3xl hover:opacity-75 transition-opacity duration-200" />
					</a>
					<a href="https://www.instagram.com/80percentcacao/?hl=en" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faInstagram} className="text-white text-3xl hover:opacity-75 transition-opacity duration-200" />
					</a>
					<a href="https://80cacao.bandcamp.com/music" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faBandcamp} className="text-white text-3xl hover:opacity-75 transition-opacity duration-200" />
					</a>
					<a href="https://soundcloud.com/80cacaopercentmusic" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faSoundcloud} className="text-white text-3xl hover:opacity-75 transition-opacity duration-200" />
					</a>
					<a href="https://80cacao.bandcamp.com/music" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faShoppingCart} className="text-white text-3xl hover:opacity-75 transition-opacity duration-200" />
					</a>
				</div>
			</div>
			<ThreeScene />
		</div>
	);
};

export default Shop;
