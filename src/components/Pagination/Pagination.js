import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ category, name }) => {
	return (
		<>
			<div className="py-8 container mx-auto">
				<ul className="flex flex-row text-sm">
					<Link to={`/`}>
						<li className="hover:underline pr-8">Home</li>
					</Link>
					<li className="pr-8">{category}</li>
					<li className="pr-8">{name}</li>
				</ul>
			</div>
		</>
	);
};

export default Pagination;
