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
  const [error, setError] = useState(null); //Ошибки
  const [successfully, setSuccessfully] = useState(false); // Определяем успешность регистации
  const [loading, setLoading] = useState(false); //Загрузка данных

  const formReg = useRef(); // Форма регистрации
  const formAuth = useRef(); // Форма авторизации

  const handleChangeAuth = ({ target }) => {
    setDataValueAuth({ ...dataValueAuth, [target.name]: target.value });
  };

  const handleSubmitAuth = (e, navigate) => {
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_URL_AUTH, dataValueAuth)
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        authUserData(data);
        navigate();
      })
      .catch((e) => {
        e.response?.status === 401
          ? setError({ error: "Не правильно введен логин или пароль" })
          : setError({ error: `${e}` });
      });
    formAuth.current.reset();
  };

  const handleRegistrationValue = ({ target }) => {
    setDataReg({ ...dataReg, [target.name]: target.value });
  };
  const handleSubmitRegistration = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(process.env.REACT_APP_URL_REGISTRATION, dataReg)
      .then(() => {
        setSuccessfully(true);
        setLoading(false);
      })
      .catch((e) => {
        e.response?.status === 409
          ? setError({ error: "Пользователь с таким именем уже существует" })
          : setError({ error: `${e}` });
        setLoading(false);
      });
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
    formAuth,
    error,
    setError,
    handleLogout,
    news,
    setNews,
    authUserData,
    isAuth,
    setIsAuth,
    userAuth,
    isRegistration,
    setIsRegistration,
    handleRegistrationValue,
    handleSubmitRegistration,
    handleChangeAuth,
    handleSubmitAuth,
    formReg,
    successfully,
    setSuccessfully,
    loading,
    setLoading,
  };
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
export { ContextProvider, Context };
