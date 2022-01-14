import React, { useContext } from "react";
import "App.css";
import { Link } from "react-router-dom";
import { Context } from "hocs/ContextProvider";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const { setIsRegistration, handleSubmitAuth, handleChangeAuth, formAuth } =
    useContext(Context);
  const navigate = useNavigate();

  return (
    <form
      ref={formAuth}
      className="form"
      onSubmit={(e) =>
        handleSubmitAuth(e, () => navigate("/news", { replace: true }))
      }
    >
      <input
        onChange={handleChangeAuth}
        name="username"
        className="input-username"
        defaultValue=""
        placeholder="Username"
        required={true}
      />
      <input
        onChange={handleChangeAuth}
        name="password"
        className="input-password"
        defaultValue=""
        placeholder="Password"
        required={true}
      />
      <button
        onSubmit={(e) =>
          handleSubmitAuth(e, () => navigate("/news", { replace: true }))
        }
        className="btn-submit"
      >
        Login
      </button>
      <Link
        to={"/registration"}
        onClick={() => setIsRegistration(true)}
        className="btn-submit"
      >
        Регистрация
      </Link>
    </form>
  );
};
export { Form };
