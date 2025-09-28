import { Routes, Route } from "react-router-dom";
import HomePage from "../components/Home/HomePage";
import Product from "../Pages/Product/Product";
import SingleProduct from "./Product/SingleProduct";
import { Cart } from "./Cart/Cart";
import Login from "../context/Login";
import Signup from "../context/Signup";
import Corporate from "./Corporate/Corporate";
import Export from "./Export/Export";
import AdminDashboard from "./Admin/AdminDashboard";
import Orders from "./Orders/Orders";
import Profile from "./Profile/Profile";

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
            <Route path="/expert" element={<Export/>} />
            <Route path="/admin" element={<AdminDashboard/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="*" element={<h4>404 Page not Found</h4>} />
        </Routes>
    )
}