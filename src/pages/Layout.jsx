import React, { useContext } from "react";
import { Form } from "../components/Form";
import { FormAuthUser } from "../components/FormAuthUser";
import { Link, Outlet } from "react-router-dom";
import { Context } from "hocs/ContextProvider";
import "App.css";

const Layout = () => {
  const { isRegistration, userAuth } = useContext(Context);
  return (
    <div className="container">
      <div className="header">
        <div className="logo">Neto Social</div>
        <Link
          stale={{ width: "100px" }}
          className="btn btn-primary"
          to={"/public"}
        >
          Зайти на публичную страницу
        </Link>
        {userAuth ? <FormAuthUser /> : !isRegistration && <Form />}
      </div>
      <Outlet />
    </div>
  );
};

export { Layout };
