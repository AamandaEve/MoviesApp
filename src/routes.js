import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";

/*Gerenciamento de rotas*/
function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/watch/:id" element={<Watch/>}></Route>
                <Route path="/search" element={<Search/>}></Route>
                <Route path="/favorites" element={<Favorites/>}></Route>
                <Route path="*" element={<PageNotFound/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;