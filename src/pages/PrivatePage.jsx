import React from "react";
import "App.css";

const PrivatePage = () => {
  return (
    <div className={"container-content"}>
      <div
        style={{ marginLeft: "20%", paddingTop: "20px" }}
        className="container-fluid"
      >
        <p className={"text-test"}>
          Это страница только для авторизованных пользователей.
        </p>
      </div>
    </div>
  );
};
export { PrivatePage };
