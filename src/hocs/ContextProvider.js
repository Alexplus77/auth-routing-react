import React, { createContext, useRef, useState } from "react";
import axios from "axios";

const Context = createContext("");

const ContextProvider = (props) => {
  const [dataValueAuth, setDataValueAuth] = useState({}); //Получаем данные с инпут формы login
  const [dataReg, setDataReg] = useState({}); // Получаем данные с инпут формы регистрации
  const [news, setNews] = useState(null); // Получаем в стейт массив новостей.
  const [isRegistration, setIsRegistration] = useState(false); // Определяем вызов формы регистрации через кнопку "Регистрация"
  const [isAuth, setIsAuth] = useState(false); //Определяем состояние, авторизован ли юзер
  const [userAuth, setUserAuth] = useState(null); // хранятся данные из бека авторизованного юзера

  const formReg = useRef();

  const handleChangeAuth = ({ target }) => {
    setDataValueAuth({ ...dataValueAuth, [target.name]: target.value });
  };

  const handleSubmitAuth = (e, navigate) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/auth", dataValueAuth)
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        authUserData(data);
        navigate();
        console.log("auth:", data);
      })
      .catch((e) => {
        e.response?.status === 401
          ? alert("Не правильно введен логин или пароль")
          : alert(e);
      });
  };

  const handleRegistrationValue = ({ target }) => {
    setDataReg({ ...dataReg, [target.name]: target.value });
  };
  const handleSubmitRegistration = (e, navigate) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/registration", dataReg)
      .then(({ data }) => {
        console.log("registration:", data);
        navigate();
      })
      .catch((e) =>
        e.response?.status === 409
          ? alert("Пользователь с таким именем уже существует")
          : alert(e)
      );
    setIsRegistration(false);
    formReg.current.reset();
  };
  const authUserData = (dataUser) => {
    setUserAuth(dataUser);
    setIsAuth(true);
  };
  const handleLogout = () => {
    setIsAuth(false);
    setUserAuth(null);
    localStorage.removeItem("token");
  };

  const value = {
    handleLogout,
    news,
    setNews,
    authUserData,
    isAuth,
    userAuth,
    isRegistration,
    setIsRegistration,
    handleRegistrationValue,
    handleSubmitRegistration,
    handleChangeAuth,
    handleSubmitAuth,
    formReg,
  };
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
export { ContextProvider, Context };
