import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => {
	return (
		<div className="layout">
			<span className="gridLine1"></span>
			<span className="gridLine2"></span>
			<Navigation />
			{/* <PromoBanner /> */}
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
