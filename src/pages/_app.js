import "index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import Checkout from "./Checkout";
import Demo from "./Demo";
import BlogPost from "./BlogPost";
import Blog from "./Blog";
import PaymentMethods from "./PaymentMethods";
import Returns from "./Returns";
import Shipping from "./Shipping";

function App() {
	return (
		<Layout>
			<BrowserRouter>
				<Routes>
					<Route element={<Home />} />
					<Route path="/product/:id" element={<ProductDetails />} />
					<Route path="/demo" element={<Demo />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/blog/:id" element={<BlogPost />} />
					<Route path="/bag" element={<Checkout />} />
					<Route path="/returns" element={<Returns />} />
					<Route path="/payment-methods" element={<PaymentMethods />} />
					<Route path="/shipping" element={<Shipping />} />
				</Routes>
			</BrowserRouter>
		</Layout>
	);
}

export default App;
