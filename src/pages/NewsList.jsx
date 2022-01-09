import React, { useContext, useEffect } from "react";
import { Context } from "hocs/ContextProvider";
import { CardNews } from "components/CardNews";
import "App.css";
import axios from "axios";

const NewsList = () => {
  const { news, setNews, authUserData, handleLogout } = useContext(Context);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8080/news", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setNews(data.articles);
        authUserData(data.user);
        console.log("news", data);
      })
      .catch((e) => {
        handleLogout();
        console.log("newsError", e);
      });
  }, []);

  return (
    <div className="container-news">
      {news?.map(({ title, urlToImage, description, url, id }) => (
        <CardNews
          key={id}
          title={title}
          urlToImage={urlToImage}
          description={description}
          url={url}
        />
      ))}
    </div>
  );
};
export { NewsList };
