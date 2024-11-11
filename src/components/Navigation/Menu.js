import React from "react";
import CartIcon from "./cartIcon";

const Menu = () => {
	return (
		<div className="flex flex-row justify-between w-full">
			<ul className="flex flex-row space-x-4">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/sounds">Sounds</a>
				</li>
				<li>
					<a href="/blog">Community</a>
				</li>
				{/* <CartIcon /> */}
			</ul>
		</div>
	);
};

export default Menu;
