import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Login from "./login";

const ProtectedRoute =()=>{
    const isAuthenticated =true
    return (
        isAuthenticated ? <Outlet/>:<Navigate to="/login"/>
    )
}
export default ProtectedRoute