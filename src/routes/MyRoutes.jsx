import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home.jsx";
import ProductsCategory from "../pages/ProductsCategory.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";
import Search from "../pages/Search.jsx";

export default function MyRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products/:category" element={<ProductsCategory />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  );
}
