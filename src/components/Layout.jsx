import React, { useContext } from "react";
import { Form } from "./Form";
import { FormAuthUser } from "./FormAuthUser";
import { Link, Outlet } from "react-router-dom";
import { Context } from "../hocs/ContextProvider";
import "App.css";

const Layout = () => {
  const { isRegistration, isAuth } = useContext(Context);
  return (
    <div className="container">
      <div className="header">
        <div className="logo">Neto Social</div>
        {isAuth ? <FormAuthUser /> : !isRegistration && <Form />}
      </div>
      <Outlet />
    </div>
  );
};

export { Layout };
