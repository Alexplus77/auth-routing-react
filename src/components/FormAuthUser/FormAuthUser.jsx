import React, { useContext } from "react";
import { Context } from "hocs/ContextProvider";
import { Link, useNavigate } from "react-router-dom";

const FormAuthUser = () => {
  const { userAuth, handleLogout } = useContext(Context);

  return (
    <form className="form">
      <div>
        Hello, {userAuth?.username}{" "}
        <img className="avatar" src={userAuth?.avatar} alt={"..."} />
      </div>
      <button onClick={handleLogout} className="btn-submit">
        Logout
      </button>
    </form>
  );
};
export { FormAuthUser };
