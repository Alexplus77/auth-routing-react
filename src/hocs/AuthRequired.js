import React, { useContext } from "react";
import { Context } from "./ContextProvider";
import { useLocation, Navigate } from "react-router-dom";

const AuthRequired = (props) => {
  const { isAuth } = useContext(Context);
  if (!isAuth) {
    return <Navigate to={"/"} />;
  }

  return props.children;
};
export { AuthRequired };
