export const getProducts = () => {
	let data = require("../data/products.json");
	return data;
};

export const getPosts = () => {
	let data = require("../data/posts.json");
	return data;
};

export const createPromoBanner = (promoText) => {
	const classNames = "flex items-center";

	const duplicatePromoText = (text) => {
		let textArray = [];
		for (let i = 0; i < 10; i++) {
			textArray.push(text);
		}
		return textArray;
	};

	const promoTextArray = duplicatePromoText(promoText);
	const promoTextList = promoTextArray.map((text, index) => (
		<>
			<span key={index} className=" text-sm px-2 py-8 m-auto">
				{text}
			</span>
		</>
	));

	return (
		<ul className={`${classNames} overflow-x-hidden`}>
			<li className="whitespace-nowrap overflow-hidden animate-scrollText">{promoTextList}</li>
		</ul>
	);
};
