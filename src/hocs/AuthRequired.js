import React, { useContext } from "react";
import { Context } from "./ContextProvider";
import { useLocation, Navigate } from "react-router-dom";

const AuthRequired = (props) => {
  const { userAuth } = useContext(Context);
  console.log(userAuth);
  if (!userAuth) {
    return <Navigate to={"/"} />;
  }
  return props.children;
};
export { AuthRequired };
