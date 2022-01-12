import "../App.css";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "hocs/ContextProvider";
import { Link } from "react-router-dom";
import { Error } from "components/Error";
import { Loading } from "components/Loading";
import { SuccessfullyReg } from "components/SuccessfullyReg";

const FormReg = () => {
  const {
    handleRegistrationValue,
    setIsRegistration,
    handleSubmitRegistration,
    formReg,
    error,
    successfully,
    loading,
  } = useContext(Context);

  useEffect(() => {
    setIsRegistration(true);
  }, []);

  return (
    <div className="container-content">
      {loading ? (
        <Loading />
      ) : successfully ? (
        <SuccessfullyReg />
      ) : error ? (
        <Error />
      ) : (
        <>
          <h1>Форма регистрации пользователя</h1>
          <form
            className="formReg"
            onSubmit={handleSubmitRegistration}
            ref={formReg}
          >
            <Link
              to={"/"}
              onClick={() => setIsRegistration(false)}
              className="fa fa-times-circle-o"
              aria-hidden="true"
            />

            <input
              onChange={handleRegistrationValue}
              name="username"
              className="input-username"
              defaultValue=""
              placeholder="Username"
              required={true}
            />
            <input
              onChange={handleRegistrationValue}
              name="password"
              className="input-password"
              defaultValue=""
              placeholder="Password"
              required={true}
            />
            <button className="btn-submit" onSubmit={handleSubmitRegistration}>
              Зарегестрироваться
            </button>
          </form>
        </>
      )}
    </div>
  );
};
export { FormReg };
