import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ isAutentication }) {
  return <div>{isAutentication ? <Outlet /> : <Navigate to="/" />}</div>;
}

export default PrivateRoute;
