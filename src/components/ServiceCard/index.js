import React from "react";
import "./index.css";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="service-card">
      <div className="service-content">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="/ourworks" className="ppo" alt="j">
        <button className="btn-s1">Learn More</button>
      </a>
    </div>
  );
};

export default ServiceCard;
