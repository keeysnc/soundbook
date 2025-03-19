import React from "react";
import Navigation from "../components/Navigation/Navigation";

const Layout = ({ children }) => {
	return (
		<div className="layout">
			<span className="gridLine1"></span>
			<span className="gridLine2"></span>
			<Navigation />
			{/* <PromoBanner /> */}
			{children}
		</div>
	);
};

export default Layout;
