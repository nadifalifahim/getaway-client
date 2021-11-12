import React from "react";
import { Navigate, Outlet } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const PrivateRoute = () => {
  // Private Route Set up

  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <p>Loading..</p>;
  }
  return user.email ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
