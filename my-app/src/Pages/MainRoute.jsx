import { Routes, Route } from "react-router-dom";
import HomePage from "../components/Home/HomePage";
import Product from "../Pages/Product/Product";
import Cart from "./Product/Cart";
import SingleProduct from "./Product/SingleProduct";


export const MainRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/product/:id" element={<SingleProduct/>} />
            <Route path="*" element={<h4>404 Page not Found</h4>} />
        </Routes>
    )
}