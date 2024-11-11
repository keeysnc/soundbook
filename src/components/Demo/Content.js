import React from "react";
import HorizontalRule from "../HorizontalRule/HorizontalRule";
import { demoStyles } from "./demoStyles";

const Content = (props) => {
	return (
		<>
			<HorizontalRule>
				<div className={demoStyles.content.content_container}>
					<h1 className="text-h1">Featured Products</h1>
					<p className="w-1/2">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu tempus quam, id commodo neque. Phasellus justo quam, tempus vitae
						ligula a, consequat blandit turpis. Vivamus placerat dolor nulla, sit amet malesuada neque dignissim sit amet. Proin ultricies, velit non
						condimentum elementum
					</p>
				</div>
			</HorizontalRule>
		</>
	);
};

export default Content;
