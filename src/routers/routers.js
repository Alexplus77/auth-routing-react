import { Route, Routes } from "react-router-dom";
import React from "react";
import { Layout } from "pages/Layout";
import { FormReg } from "pages/FormReg";
import { TitlePage } from "pages/TitlePage";
import { NewsList } from "pages/NewsList";
import { CardNews } from "pages/CardNews";
import { AuthRequired } from "hocs/AuthRequired";

const Routers = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<TitlePage />} />
        <Route path={"/registration"} element={<FormReg />} />
        <Route path={"/news"} element={<NewsList />} />
        <Route path={"/news/:id"} element={<CardNews />} />
      </Route>
    </Routes>
  );
};

export { Routers };
