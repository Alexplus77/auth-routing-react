import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "hocs/ContextProvider";
const SuccessfullyReg = () => {
  const { setSuccessfully, setIsRegistration } = useContext(Context);
  return (
    <div className="successfully">
      Поздравляем, вы успешно зарегестрировались на сайте!!! Теперь можете войти
      на сайт под своим именем и паролем.
      <div
        onClick={() => {
          setSuccessfully(false);
          setIsRegistration(false);
        }}
      >
        <Link className="btn btn-primary" to={"/"}>
          Ok
        </Link>
      </div>
    </div>
  );
};
export { SuccessfullyReg };
