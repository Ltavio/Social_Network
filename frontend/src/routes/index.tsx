import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PagCadastro from "../pages/cadastro";
import PagDashboard from "../pages/dashboard";
import PagLogin from "../pages/login";


const RouteMain = () => {
    return (
        <Routes>
            <Route path="/cadastro" element={<PagCadastro />} />
            <Route path="/login" element={<PagLogin />} />
            <Route path="/dashboard" element={<PagDashboard />} />
            <Route path="*" element={<Navigate replace to={"/login"} />} />
        </Routes>
    )
} 

export default RouteMain;