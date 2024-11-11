import React from "react";
import { horizontalRuleStyles } from "./horizontalRuleStyles";

const HorizontalRule = ({ children }) => {
	return (
		<>
			<div className={horizontalRuleStyles.styles}>{children}</div>
		</>
	);
};

export default HorizontalRule;
