import React from "react";

const HalfLayout = ({ children }) => {
	return <div className="py-4 px-10 md:basis-1/3 sm:basis-full">{children}</div>;
};

export default HalfLayout;
