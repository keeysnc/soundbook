import React from "react";
import { createPromoBanner } from "../../utils/utils";
import { footerStyles } from "./footerStyles";

const Footer = () => {
	const promoText = "SOUNDBOOK - A Digital Sensory Curation";

	return (
		<>
			<div>
				<div className={footerStyles.footer_bg}>
					<div className={footerStyles.footer_container}>
						<div className="px-4">
							<a href="/" className="pb-4">
								<svg width="75" height="75" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
									{/* Inner Circle */}
									<circle cx="100" cy="100" r="70" stroke="white" strokeWidth="6" fill="none" />

									{/* Text Path Definition */}
									<defs>
										<path id="textPath" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
									</defs>

									{/* Rotating Text */}
									<text fontSize="30" fontFamily="Bebas" fill="white">
										<textPath
											href="#textPath"
											startOffset="0%"
											style={{
												animation: "rotateText 8s linear infinite",
											}}
										>
											SOUNDBOOK
										</textPath>
									</text>

									<style>
										{`
                  text {
                    transform-origin: 100px 100px; /* Center the rotation */
                    animation: rotateText 8s linear infinite;
                  }

                  @keyframes rotateText {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                  }
                `}
									</style>
								</svg>
							</a>
							{/* <ul>
							<li className="pb-2">Payment Methods</li>
							<li className="pb-2">Shipping and Delivery</li>
							<li className="pb-2">Return & Refund</li>
						</ul> */}
							<p className="text-[16px]">Digital Soundbook Curation [2024]</p>
							<b>
								<p className="italic text-[16px]">
									Curated with lofi beat produced by{" "}
									<a
										target="_blank"
										className="underline cursor-pointer"
										href="https://open.spotify.com/artist/5e8tG9jOxUPyK6IOQ3ZDSg?si=BOAgRKf9Tb-Y2mtLrkERzQ"
									>
										80% Cacao
									</a>
								</p>
							</b>
							<br />
							<small>Copyright 2024 - Digital Anthro, LLC </small>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
