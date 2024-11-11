import React from "react";
import Navigation from "../Navigation/Navigation";
import PromoBanner from "../PromoBanner/PromoBanner";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
	return (
		<div className="layout font-body">
			<Navigation />
			<PromoBanner />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
