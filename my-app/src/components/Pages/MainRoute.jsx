import { Routes, Route } from "react-router-dom";
import HomePage from "../Home/HomePage";



export const MainRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="*" element={<h4>404 Page not Found</h4>} />
        </Routes>
    )
}