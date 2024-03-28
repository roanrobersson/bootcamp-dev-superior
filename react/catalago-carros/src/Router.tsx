import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "pages/Catalog";
import Home from "pages/Home";

import Navbar from "components/Navbar";

const Router = () => (
	<BrowserRouter>
		<Navbar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/products" element={<Catalog />} />
		</Routes>
	</BrowserRouter>
);

export default Router;
