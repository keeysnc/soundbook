import React from "react";
import ThreeScene from "../components/Scenes/Scene";

const Shop = () => {
	return (
		<>
			<div className="container px-4 pt-20 pb-20 mx-auto flex flex-col h-full justify-center">
				<section className="hero-content">
					<h1>Music Artist | Producer | Technologist</h1>
					<p className="content-bio justify-center">
						80% Cacao is a multi-instrumentalist, producer, and songwriter. His music is greatly influenced by ambient and airy sounds which he fuses
						with soulful guitar and live percussion. 80% takes a creative approach to making music by recording and experimenting with live
						instrumentation and percussion from his home studio.
						<br />
						<br />
						80% Cacao has producing music since 2013, working with artists locally and remote. His music has been featured on several blogs including
						Earmilk, Stereofox, Hype Machine, theneptunes.org and more.
					</p>
					<p className="content-cta">
						<a href="mailto:80percentcacao@gmail.com">For project or music license inquires contact here</a>
					</p>
				</section>
				<br />
				<br />
				{/* <section className="album-list">
					<ul>
						<li>
							<iframe
								style={{ border: "0", borderRadius: "20px", width: "250px", height: "250px" }}
								src="https://bandcamp.com/EmbeddedPlayer/album=4198246194/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
								seamless
							>
								<a href="https://80cacao.bandcamp.com/album/it-was-like-floating">it was like floating by 80% Cacao</a>
							</iframe>
						</li>
						<li>
							<iframe
								style={{ border: "0", borderRadius: "20px", width: "250px", height: "250px" }}
								src="https://bandcamp.com/EmbeddedPlayer/album=2251464874/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
								seamless
							>
								<a href="https://80cacao.bandcamp.com/album/narnia">Narnia by 80% Cacao</a>
							</iframe>
						</li>
						<li>
							<iframe
								style={{ border: "0", borderRadius: "20px", width: "250px", height: "250px" }}
								src="https://bandcamp.com/EmbeddedPlayer/album=203202250/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
								seamless
							>
								<a href="https://80cacao.bandcamp.com/album/luma">Luma by 80% Cacao</a>
							</iframe>
						</li>
						<li>
							<iframe
								style={{ border: "0", borderRadius: "20px", width: "250px", height: "250px" }}
								src="https://bandcamp.com/EmbeddedPlayer/track=3754903814/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
								seamless
							>
								<a href="https://80cacao.bandcamp.com/track/sky-palette">Sky Palette by 80% Cacao</a>
							</iframe>
						</li>
						<li>
							<iframe
								style={{ border: "0", borderRadius: "20px", width: "250px", height: "250px" }}
								src="https://bandcamp.com/EmbeddedPlayer/track=1724512115/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
								seamless
							>
								<a href="https://80cacao.bandcamp.com/track/new-light">New Light by 80% Cacao</a>
							</iframe>
						</li>
					</ul>
				</section> */}
			</div>
			<ThreeScene />
		</>
	);
};

export default Shop;
