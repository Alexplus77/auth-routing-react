import React, { useContext } from "react";
import { Context } from "./ContextProvider";
import { useLocation, Navigate } from "react-router-dom";

const AuthRequired = (props) => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  if (!token) {
    return <Navigate to={"/"} state={{ from: location.pathname }} />;
  }
  return props.children;
};
export { AuthRequired };
