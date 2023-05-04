import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/register";
import Article from "./pages/detailarticle";
import Dashboard from "./pages/dashboard";
import FavArticle from "./pages/favouritearticle";
import MyArticle from "./pages/myarticle";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path={"/"} />
                <Route element={<Login />} path={"/login"} />
                <Route element={<Register />} path={"/register"} />
                <Route element={<Article />} path={"/articles/:id"} />
                <Route element={<Dashboard />} path={"/dashboard"} />
                <Route element={<FavArticle />} path={"/favarticle"} />
                <Route element={<MyArticle />} path={"/myarticle"} />
            </Routes>
        </BrowserRouter>
    );
}