import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const ProductCard = (props) => {
	let item = props.item;

	// Create refs for all elements
	const imageRef = useRef(null);
	const nameRef = useRef(null);
	const priceRef = useRef(null);

	useEffect(() => {
		// Staggered animation for all elements: fade in and move up
		gsap.fromTo(
			[imageRef.current, nameRef.current, priceRef.current],
			{ opacity: 0, y: 20 }, // Starting point (hidden and slightly below)
			{
				opacity: 1,
				y: 0, // End position (fully visible and at the correct position)
				duration: 1,
				stagger: 0.3, // Stagger each element by 0.3s
			}
		);
	}, []);

	return (
		<Link to={`/product/${item.id}`} relative="path">
			<div>
				<div className="ripple-effect">
					<img
						ref={imageRef} // Attach the ref to the image element
						className="grayscale h-96 w-full object-cover object-top"
						alt={item.product_name}
						src={item.url}
					/>
				</div>
				<div className="flex flex-col pt-2">
					<p ref={nameRef}>{item.product_name}</p>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
