import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSpotify, faInstagram, faBandcamp, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import ThreeScene from "../components/Scenes/Scene";

const Shop = () => {
	return (
		<div>
			<div className="container px-4 pt-20 pb-20 mx-auto flex flex-col">
				<section className="hero-content">
					<h1>music producer + sound designer + songwriter</h1>
					<p className="content-bio">
						80% Cacao is a multi-instrumentalist, producer, and songwriter. His music is greatly influenced by ambient and airy sounds which he fuses
						with soulful guitar and live percussion. 80% takes a creative approach to making music by recording and experimenting with live
						instrumentation and percussion from his home studio.
						<br />
						<br />
						80% Cacao has producing music since 2013, working with local artists from Richmond, VA, San Diego, Brooklyn, NY and the Washington DC
						area. His music has been featured on several blogs including Earmilk, Stereofox, Hype Machine, theneptunes.org and more.
						<br />
						<br />
						Currently, 80% Cacao is focused on working with local artists and developing sounds and tools to create new compositions.
					</p>
					<p className="content-cta">
						<a href="mailto:80percentcacao@gmail.com">For project or music license inquires contact here</a>
					</p>
				</section>
				<br />
				<br />
				<section className="album-list">
					<ul>
						<li>
							<iframe
								style={{ border: "0", width: "250px", height: "250px" }}
								src="https://bandcamp.com/EmbeddedPlayer/album=4198246194/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
								seamless
							>
								<a href="https://80cacao.bandcamp.com/album/it-was-like-floating">it was like floating by 80% Cacao</a>
							</iframe>
						</li>
						<li>
							<iframe
								style={{ border: "0", width: "250px", height: "250px" }}
								src="https://bandcamp.com/EmbeddedPlayer/album=2251464874/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
								seamless
							>
								<a href="https://80cacao.bandcamp.com/album/narnia">Narnia by 80% Cacao</a>
							</iframe>
						</li>
						<li>
							<iframe
								style={{ border: "0", width: "250px", height: "250px" }}
								src="https://bandcamp.com/EmbeddedPlayer/album=203202250/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
								seamless
							>
								<a href="https://80cacao.bandcamp.com/album/luma">Luma by 80% Cacao</a>
							</iframe>
						</li>
						<li>
							<iframe
								style={{ border: "0", width: "250px", height: "250px" }}
								src="https://bandcamp.com/EmbeddedPlayer/track=3754903814/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
								seamless
							>
								<a href="https://80cacao.bandcamp.com/track/sky-palette">Sky Palette by 80% Cacao</a>
							</iframe>
						</li>
						<li>
							<iframe
								style={{ border: "0", width: "250px", height: "250px" }}
								src="https://bandcamp.com/EmbeddedPlayer/track=1724512115/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
								seamless
							>
								<a href="https://80cacao.bandcamp.com/track/new-light">New Light by 80% Cacao</a>
							</iframe>
						</li>
						<li>
							<iframe
								style={{ border: "0", width: "250px", height: "250px" }}
								src="https://bandcamp.com/EmbeddedPlayer/album=3048614943/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
								seamless
							>
								<a href="https://80cacao.bandcamp.com/album/crystal-feat-substantial">Crystal Feat. Substantial by 80% Cacao</a>
							</iframe>
						</li>
						<li>
							<iframe
								style={{ border: "0", width: "250px", height: "250px" }}
								src="https://bandcamp.com/EmbeddedPlayer/track=3649528684/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
								seamless
							>
								<a href="https://80cacao.bandcamp.com/track/cortado">Cortado by 80% Cacao</a>
							</iframe>
						</li>
						<li>
							<iframe
								style={{ border: "0", width: "250px", height: "250px" }}
								src="https://bandcamp.com/EmbeddedPlayer/track=1818138577/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
								seamless
							>
								<a href="https://80cacao.bandcamp.com/track/plastic-love-80-cacao-remix">Plastic Love - 80% Cacao Remix by 80% Cacao</a>
							</iframe>
						</li>
						<li>
							<iframe
								style={{ border: "0", width: "250px", height: "250px" }}
								src="https://bandcamp.com/EmbeddedPlayer/track=2174370003/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
								seamless
							>
								<a href="https://80cacao.bandcamp.com/track/dreamcatcher">Dreamcatcher by 80% Cacao</a>
							</iframe>
						</li>
						<li>
							<iframe
								style={{ border: "0", width: "250px", height: "250px" }}
								src="https://bandcamp.com/EmbeddedPlayer/album=1300003715/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
								seamless
							>
								<a href="https://80cacao.bandcamp.com/album/turmeric-tea">Turmeric Tea by 80% Cacao</a>
							</iframe>
						</li>
					</ul>
				</section>

				{/* Social Media Links */}
				<div className="flex justify-center mt-8 gap-10">
					<a href="https://open.spotify.com/artist/5e8tG9jOxUPyK6IOQ3ZDSg?si=52u4lU3LR46HLddXHqVkLQ" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faSpotify} className="text-black text-3xl hover:opacity-75 transition-opacity duration-200" />
					</a>
					<a href="https://www.instagram.com/80percentcacao/?hl=en" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faInstagram} className="text-black text-3xl hover:opacity-75 transition-opacity duration-200" />
					</a>
					<a href="https://80cacao.bandcamp.com/music" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faBandcamp} className="text-black text-3xl hover:opacity-75 transition-opacity duration-200" />
					</a>
					<a href="https://soundcloud.com/80cacaopercentmusic" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faSoundcloud} className="text-black text-3xl hover:opacity-75 transition-opacity duration-200" />
					</a>
					<a href="https://80cacao.bandcamp.com/music" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faShoppingCart} className="text-black text-3xl hover:opacity-75 transition-opacity duration-200" />
					</a>
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
								style={{ width: "33px" }}
							/>
						</div>
					</a>
				</div>
				<br />
			</div>
			{/* <ThreeScene /> */}
		</div>
	);
};

export default Shop;
