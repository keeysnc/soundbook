import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Shop from "./pages/Shop";
import CursorRing from "./components/customCursor/CustomCursor";

function App() {
	return (
		<>
			<Layout>
				<CursorRing />
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
