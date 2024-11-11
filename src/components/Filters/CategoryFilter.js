import React from "react";
import { Link } from "react-router-dom";

const CategoryFilter = ({ handleCategorySort }) => {
	const categoryList = [
		{ name: "All", path: "/sounds" },
		{ name: "Music", path: "/sounds?category=music" },
		{ name: "Frequencies", path: "/sounds?category=frequencies" },
		{ name: "Nature", path: "/sounds?category=nature" },
		{ name: "Background Noise", path: "/sounds?category=background-noise" },
	];

	const categories = categoryList.map((category) => {
		return (
			<Link to={category.path} onClick={handleCategorySort} className="hover:underline category flex relative cursor-pointer">
				<li>{category.name}</li>
			</Link>
		);
	});

	return (
		<div className="category-filter">
			<p className="font-bold pb-6 pt-6">BROWSE BY:</p>
			<ul className="inline-block space-y-2 md:flex-row pb-6 sm:flex-col ">{categories}</ul>
		</div>
	);
};

export default CategoryFilter;
