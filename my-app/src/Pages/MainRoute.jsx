import { Routes, Route } from "react-router-dom";
import HomePage from "../components/Home/HomePage";
import Product from "../Pages/Product/Product";
import SingleProduct from "./Product/SingleProduct";
import { Cart } from "./Cart/Cart";
import Login from "../context/Login";
import Signup from "../context/Signup";
import Corporate from "./Corporate/Corporate";

export const MainRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/corporate" element={<Corporate/>} />
            <Route path="/product/:id" element={<SingleProduct/>} />
            <Route path="*" element={<h4>404 Page not Found</h4>} />
        </Routes>
    )
}