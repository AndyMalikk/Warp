// PrivateRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext2";

// This will wrap protected routes
const PrivateRoute2 = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate
      to="/admin"
      replace
    />
  );
};

export default PrivateRoute2;
