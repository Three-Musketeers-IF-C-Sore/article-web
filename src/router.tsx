import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/register";
import Article from "./pages/article";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path={"/"} />
                <Route element={<Login />} path={"/login"} />
                <Route element={<Register />} path={"/register"} />
                <Route element={<Article />} path={"/articles/:id"} />
            </Routes>
        </BrowserRouter>
    );
}