import React from "react";
import { Navigate, Outlet } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import PlaceOrder from "../../PlaceOrder/PlaceOrder";

const PrivateRoute = ({ children, redirectTo }) => {
  // Private Route Set up

  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <p>Loading..</p>;
  }
  return user.email ? children : <Navigate to={"/login"} />;
};

export default PrivateRoute;
