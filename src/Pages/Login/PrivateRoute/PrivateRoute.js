import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import Loader from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  // Private Route Set up
  const location = useLocation();

  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="loader">
        <Loader type="Grid" color="#f36201" height={80} width={80} />
      </div>
    );
  }
  return user.email ? (
    children
  ) : (
    <Navigate to={{ pathname: "/login", state: { from: location } }} />
  );
};

export default PrivateRoute;
