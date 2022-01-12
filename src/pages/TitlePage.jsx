import React, { useContext } from "react";
import { Context } from "hocs/ContextProvider";
import { Error } from "components/Error/Error";
const TitlePage = () => {
  const { error } = useContext(Context);
  return (
    <div className="container-content">
      {error ? (
        <Error />
      ) : (
        <div className="title-page">
          <i className="title-content">Neto Social</i>
          <i className="content">Facebook and VK killer</i>
        </div>
      )}
    </div>
  );
};

export { TitlePage };
