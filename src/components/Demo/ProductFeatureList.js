import React, { useEffect } from "react";
import { getProducts } from "../../utils/utils";
import ProductCard from "../Products/ProductCard";
import { demoStyles } from "./demoStyles";

const ProductFeatureList = () => {
	const products = getProducts();

	useEffect(() => {
		console.log(products);
	}, [products]);

	const filterFeatureProducts = products.map((item) => (item.feature ? <ProductCard key={item.id} item={item} /> : null));

	return <div className={demoStyles.product_feat_list.product_feat_list_container}>{filterFeatureProducts}</div>;
};

export default ProductFeatureList;
