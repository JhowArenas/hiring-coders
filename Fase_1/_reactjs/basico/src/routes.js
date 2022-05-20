import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
  

import Home from "./Home";
import Repositories from "./Repositories";

function Rotas() {
    return(
        <BrowserRouter>
            <Routes>s
                <Route path="/" element={<Home title="Hola" user="Gama Academy" />} />
                <Route path="/repositories" element={<Repositories/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;