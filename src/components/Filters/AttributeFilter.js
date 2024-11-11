import React from "react";

const AttributeFilter = ({ color, size, handleAttributeSort }) => {
	// const sizes = ["size", "sm", "md", "lg", "xl"];
	// const colors = ["color", "Blue", "Black", "White"];
	// const collections = ["collection", "nike", "adidas"];

	const sizeFilter = size.map((size) => {
		return (
			<option className="hover:underline cursor-pointer" onChange={handleAttributeSort} value={size}>
				{size}
			</option>
		);
	});

	const colorsFilter = color.map((color) => {
		return (
			<option className="hover:underline cursor-pointer" onChange={handleAttributeSort} value={color}>
				{color}
			</option>
		);
	});

	// const collectionsFilter = collections.map((collection) => {
	// 	return (
	// 		<option className="hover:underline cursor-pointer" onChange={handleAttributeSort} value={collection}>
	// 			{collection}
	// 		</option>
	// 	);
	// });

	return (
		<div className="attribute-filter">
			<div className="space-y-2">
				<label for="sizes" className="font-bold">
					Size:
				</label>
				<select onChange={handleAttributeSort}>{sizeFilter}</select>
			</div>
			<div className="space-y-2">
				<label for="color" className="font-bold">
					Color:
				</label>
				<select onChange={handleAttributeSort}>{colorsFilter}</select>
			</div>
		</div>
	);
};

export default AttributeFilter;
