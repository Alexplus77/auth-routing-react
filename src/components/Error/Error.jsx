import React, { useContext } from "react";
import { Context } from "hocs/ContextProvider";

const Error = () => {
  const { error, setError } = useContext(Context);

  return (
    <div className="error">
      Произошла ошибка:
      <p>{error.error}</p>
      <button className="btn btn-primary" onClick={() => setError(null)}>
        Ok
      </button>
    </div>
  );
};

export { Error };
