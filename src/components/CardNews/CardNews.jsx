import React from "react";
import "App.css";

const CardNews = ({ title, urlToImage, description }) => (
  <div key={title} className="card card-newsList" style={{ width: "20rem" }}>
    <img src={urlToImage} className="card-img-top" alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
    </div>
  </div>
);
export { CardNews };
