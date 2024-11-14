import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HalfLayout from "../components/Layouts/HalfLayout";
import Pagination from "../components/Pagination/Pagination";
import { exitBtn, productColor } from "../assets/Icons";
import { getProducts } from "../utils/utils";
import AttributeFilter from "../components/Filters/AttributeFilter";

const ProductDetails = () => {
	const location = useLocation();
	const products = getProducts();

	const pathname = location.pathname;
	const returnToHome = () => {};

	return (
		<>
			{products.map((item) => {
				if (pathname === `/product/${item.id}`) {
					return (
						<>
							<Pagination category={item.category} name={item.product_name} />
							<div className="container gap-10 sm:h-full md:h-screen lg:h-screen gridLines px-4 pt-12 mx-auto left-sidebar-layout flex flex-col md:flex-row">
								<HalfLayout>
									<div className="product-details-img">
										<img className="object-cover object-center w-full h-full" alt="detail-img" src={item.url} />
									</div>
								</HalfLayout>
								<HalfLayout>
									<div className="product-details">
										<Link to="/sounds" onClick={returnToHome} className="cursor-pointer">
											{exitBtn()}
										</Link>
										<h4 className="text-h4 pb-4">{item.product_name}</h4>
										<p>{item.price}</p>
									</div>
								</HalfLayout>
							</div>
						</>
					);
				}
			})}
		</>
	);
};

export default ProductDetails;
