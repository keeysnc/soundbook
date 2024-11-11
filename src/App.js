import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import PaymentMethods from "./pages/PaymentMethods";
import Returns from "./pages/Returns";
import Shipping from "./pages/Shipping";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Demo from "./pages/Demo";

function App() {
	return (
		<>
			<Layout>
				<BrowserRouter>
					<Routes>
						<Route index element={<Home />} />
						<Route path="/sounds" element={<Shop />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/blog/:path" element={<BlogPost />} />
						<Route path="/product/:id" element={<ProductDetails />} />
						<Route path="/bag" element={<Checkout />} />
						<Route path="/returns" element={<Returns />} />
						<Route path="/payment-methods" element={<PaymentMethods />} />
						<Route path="/shipping" element={<Shipping />} />
					</Routes>
				</BrowserRouter>
			</Layout>
		</>
	);
}

export default App;
