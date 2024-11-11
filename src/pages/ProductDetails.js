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
	const returnToHome = () => {
		console.log("test");
	};

	return (
		<>
			{products.map((item) => {
				if (pathname === `/product/${item.id}`) {
					return (
						<>
							<Pagination category={item.category} name={item.product_name} />
							<div className="container gap-10 h-screen gridLines px-4 pt-12 mx-auto left-sidebar-layout flex flex-col md:flex-row">
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
										<h4 className="text-h4">{item.product_name}</h4>
										<p>{item.price}</p>
										<p className="pt-4">
											Crafted for performance and style, our fitness apparel blends comfort, durability, and flexibility to meet the demands of your
											active lifestyle. Designed with high-quality, breathable fabrics, each piece provides the perfect fit to keep you moving freely,
											whether you're at the gym, outdoors, or on the go. With modern designs and thoughtful details, our gear supports you through
											every workout, helping you look and feel your best.
										</p>
										<br />
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
