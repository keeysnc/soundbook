import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Shop from "./pages/Shop";

function App() {
	return (
		<>
			<Layout>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Shop />} />
					</Routes>
				</BrowserRouter>
			</Layout>
		</>
	);
}

export default App;
