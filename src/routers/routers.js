import { Route, Routes } from "react-router-dom";
import React from "react";
import { Layout } from "pages/Layout";
import { FormReg } from "pages/FormReg";
import { TitlePage } from "pages/TitlePage";
import { NewsList } from "pages/NewsList";
import { CardNews } from "pages/CardNews";
import { Page404 } from "pages/Page404";
import { PublicPage } from "pages/PublicPage";
import { PrivatePage } from "pages/PrivatePage";
import { AuthRequired } from "hocs/AuthRequired";

const Routers = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<TitlePage />} />
        <Route
          path={"/private"}
          element={
            <AuthRequired>
              <PrivatePage />
            </AuthRequired>
          }
        />
        <Route path={"/public"} element={<PublicPage />} />

        <Route path={"/registration"} element={<FormReg />} />
        <Route
          path={"/news"}
          element={
            <AuthRequired>
              <NewsList />
            </AuthRequired>
          }
        />
        <Route
          path={"/news/:id"}
          element={
            <AuthRequired>
              <CardNews />
            </AuthRequired>
          }
        />
        <Route path={"*"} element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export { Routers };
