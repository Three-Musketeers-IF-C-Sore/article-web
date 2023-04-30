import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Game from "./pages/game";
import Leaderboard from "./pages/leaderboard";
import X from "./pages/X";
import O from "./pages/O";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path={"/"} />
                <Route element={<Login />} path={"/login"} />
                <Route element={<SignUp />} path={"/signup"} />
                <Route element={<Game />} path={"/game"} />
                <Route element={<Leaderboard />} path={"/leaderboard"} />
                <Route element={<X />} path={"/X"} />
                <Route element={<O />} path={"/O"} />
            </Routes>
        </BrowserRouter>
    );
}