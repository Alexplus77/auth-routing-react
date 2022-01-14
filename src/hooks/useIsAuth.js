import React, { useEffect, useState, useContext } from "react";

import { Context } from "../hocs/ContextProvider";
import axios from "axios";

const UseIsAuth = () => {
  const token = localStorage.getItem("token");
  const { setUserAuth, handleLogout, setError, error, userAuth } =
    useContext(Context);
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_URL_AUTHUSER, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setUserAuth(data);
        setUser(data);
      })
      .catch((e) => {
        handleLogout();
      });
  }, []);
  console.log(token);
  return { token, error };
};

export { UseIsAuth };
