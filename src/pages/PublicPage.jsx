import React from "react";
import { Link } from "react-router-dom";
import "App.css";

const PublicPage = () => {
  return (
    <div className={"container-content"}>
      <div
        style={{ marginLeft: "20%", paddingTop: "20px" }}
        className="container-fluid"
      >
        <p>
          Это станица публичная, её могут просматривать даже неавторизованные
          пользователи.
        </p>
        <Link
          style={{ width: "300px", height: "80px", marginLeft: "20%" }}
          className="btn btn-primary"
          to={"/private"}
        >
          Перейти на страницу новостей. Только для авторизованных
          пользователей!!!{" "}
        </Link>
      </div>
    </div>
  );
};

export { PublicPage };
