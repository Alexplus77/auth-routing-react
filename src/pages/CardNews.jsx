import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "hocs/ContextProvider";
import { Error } from "components/Error";
import { Loading } from "components/Loading";
import "App.css";
import axios from "axios";

const CardNews = () => {
  const [newsSingle, setNewsSingle] = useState(null);
  const { handleLogout, setError, error, loading, setLoading, authUserData } =
    useContext(Context);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");
    axios
      .get(`${process.env.REACT_APP_URL_NEWS}${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setNewsSingle(data.article);
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
    <div className="container-content">
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <>
          <Link
            to={"/news"}
            className="fa fa-times-circle-o fa-newsSingle"
            aria-hidden="true"
          />
          <div
            key={newsSingle?.title}
            className="card"
            style={{ width: "40rem" }}
          >
            <img
              src={newsSingle?.urlToImage}
              className="card-img-top"
              alt={newsSingle?.title}
            />
            <div className="card-body">
              <h5 className="card-title">{newsSingle?.title}</h5>
              <p className="card-text">{newsSingle?.description}</p>
              <a href={newsSingle?.url} className="btn btn-primary ">
                Узнать больше
              </a>
              <Link className="btn btn-primary btn-closeNews" to={"/news"}>
                Закрыть
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export { CardNews };
