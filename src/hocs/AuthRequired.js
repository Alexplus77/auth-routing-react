import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { UseIsAuth } from "hooks/useIsAuth";

const AuthRequired = (props) => {
  const location = useLocation();
  const { token, error } = UseIsAuth();

  if (!token || error) {
    return <Navigate to={"/"} state={{ from: location.pathname }} />;
  }
  return props.children;
};
export { AuthRequired };
