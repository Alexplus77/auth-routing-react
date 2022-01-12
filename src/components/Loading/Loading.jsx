import React from "react";
const Loading = () => {
  return (
    <div className="spinner-grow text-warning spinner" role="status">
      <span style={{ color: "black" }} className="sr">
        Loading...
      </span>
    </div>
  );
};
export { Loading };
