import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ProductCard from "../components/Products/ProductCard";
import { getProducts } from "../utils/utils";
import OneForthLayout from "../components/Layouts/OneForthLayout";
import ThreeForthLayout from "../components/Layouts/ThreeForthLayout";
import CategoryFilter from "../components/Filters/CategoryFilter";

const Shop = () => {
	const [category, setCategory] = useState(null);
	const [attribute, setAttribute] = useState(null);
	const products = getProducts();

	const titleRef = useRef(null);
	const filterRef = useRef(null);
	const productRefs = useRef([]);
	productRefs.current = []; // Reset refs array on each render

	// Handle sorting/filtering
	const handleCategorySort = (e) => {
		const selectedCategory = e.target.innerHTML;
		setCategory(selectedCategory);
	};

	// const handleAttributeSort = (e) => {
	// 	const selectedAttribute = e.target.value;
	// 	setAttribute(selectedAttribute);
	// };

	// Filter products based on category or attribute
	const mapProductsCards = products.map((item) => {
		if (category === item.category || category === null || category === "All" || item.sizes.includes(attribute)) {
			return (
				<ProductCard
					key={item.id}
					item={item}
					ref={(el) => productRefs.current.push(el)} // Pushing references for product cards
				/>
			);
		}
		return null;
	});

	// UseEffect to trigger animations when the component mounts or products change
	useEffect(() => {
		// Fade in title
		gsap.fromTo(titleRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1 });

		// Fade in category filter with slight delay
		gsap.fromTo(filterRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 0.3 });

		// Staggered fade-in for product cards
		gsap.fromTo(productRefs.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 0.6 });
	}, [products]); // Dependency on products ensures animations are triggered when products load

	return (
		<div>
			<div className="container min-h-screen px-4 pt-20 pb-20 mx-auto flex flex-col md:flex-row">
				{/* Sidebar */}
				<OneForthLayout>
					<h1 ref={titleRef} className="sidebar-title text-h1 text-2xl lg:text-3xl lg:text-left md:text-left sm:text-left">
						Sounds
					</h1>
					<div ref={filterRef} className="mt-4 md:mt-0">
						<CategoryFilter handleCategorySort={handleCategorySort} />
					</div>
				</OneForthLayout>

				{/* Product Grid */}
				<ThreeForthLayout>
					<div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">{mapProductsCards}</div>
				</ThreeForthLayout>
			</div>
		</div>
	);
};

export default Shop;
