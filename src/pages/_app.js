import "index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layouts/Layout";

function App() {
	return (
		<Layout>
			<BrowserRouter>
				<Routes>
					<Route element={<Shop />} />
				</Routes>
			</BrowserRouter>
		</Layout>
	);
}

export default App;
