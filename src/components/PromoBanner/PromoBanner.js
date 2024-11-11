import React, { useState } from "react";
import HorizontalRule from "../HorizontalRule/HorizontalRule";
import { promoBannerStyles } from "./promoBannerStyles";
import { bannerExitBtn } from "../../assets/Icons";

const PromoBanner = () => {
	const [hide, setHide] = useState(false);

	const removeBanner = () => {
		setHide(!hide);
	};

	return (
		<div className={`bg-black text-white ${hide && "hidden"}`}>
			<HorizontalRule>
				<div className={`${promoBannerStyles.promo_banner_container}`}>
					<div className="flex flex-row">
						<p>
							<span className="font-bold">BLACK FRIDAY SALE!</span> GET 10% OFF ALL PRODUCTS.{" "}
							<a href="/">
								<span className="underline underline-offset-8 font-bold">SHOP NOW</span>
							</a>
						</p>
					</div>
					<div onClick={removeBanner} className="cursor-pointer">
						{bannerExitBtn()}
					</div>
				</div>
			</HorizontalRule>
		</div>
	);
};

export default PromoBanner;
