import { Route, Routes } from "react-router-dom";
import React from "react";
import { Layout } from "components/Layout";
import { FormReg } from "components/FormReg";
import { TitlePage } from "pages/TitlePage";
import { NewsList } from "pages/NewsList";

const Routers = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<TitlePage />} />
        <Route path={"/registration"} element={<FormReg />} />
        <Route path={"/news"} element={<NewsList />} />
      </Route>
    </Routes>
  );
};

export { Routers };
