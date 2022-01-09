import "App.css";
import React, { useContext, useEffect } from "react";
import { Context } from "hocs/ContextProvider";
import { Link, useNavigate } from "react-router-dom";

const FormReg = () => {
  const {
    handleRegistrationValue,
    setIsRegistration,
    handleSubmitRegistration,
    formReg,
  } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    setIsRegistration(true);
  }, []);
  return (
    <div className="container-content">
      <h1>Форма регистрации пользователя</h1>
      <form
        className="formReg"
        onSubmit={(e) =>
          handleSubmitRegistration(e, () => navigate("/", { replace: true }))
        }
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
        <button
          className="btn-submit"
          onSubmit={(e) =>
            handleSubmitRegistration(e, () => navigate("/", { replace: true }))
          }
        >
          Зарегестрироваться
        </button>
      </form>
    </div>
  );
};
export { FormReg };
