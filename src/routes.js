import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";

/*Gerenciamento de rotas*/
function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/watch" element={<Watch/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;