import React from "react";
import IconBox from "./IconBox";

const Card = ({ icon, title, description }) => {
  return (
    <div className="card text-center bg-body-tertiary">
      <IconBox icon={icon} />
      <div className="card-body p-4">
        <h5 className="card-title fs-3">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;
