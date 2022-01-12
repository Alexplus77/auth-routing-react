import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "hocs/ContextProvider";
import { CardNews } from "components/CardNews";
import { Error } from "components/Error";
import { Loading } from "components/Loading";
import "App.css";
import axios from "axios";

const NewsList = () => {
  const {
    news,
    setNews,
    authUserData,
    handleLogout,
    setError,
    error,
    loading,
    setLoading,
    isAuth,
  } = useContext(Context);
  console.log(isAuth);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");
    axios
      .get(process.env.REACT_APP_URL_NEWS, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setNews(data.articles);
        authUserData(data.user);
        setLoading(false);
      })
      .catch((e) => {
        handleLogout();
        setError({ error: `${e}` });
        setLoading(false);
      });
  }, []);

  return (
    <div className="container-news">
      {loading ? (
        <div className="spinnerNewsList">
          <Loading />
        </div>
      ) : error ? (
        <div className="spinnerNewsList">
          <Error />
        </div>
      ) : (
        news?.map(({ title, urlToImage, description, url, id }) => (
          <div key={id} onClick={() => navigate(`/news/${id}`)}>
            <CardNews
              title={title}
              urlToImage={urlToImage}
              description={description}
              url={url}
            />
          </div>
        ))
      )}
    </div>
  );
};
export { NewsList };
