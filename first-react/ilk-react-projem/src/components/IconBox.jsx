import React from "react";

const IconBox = ({ icon }) => {
  return (
    <div className="d-inline-block ">
      <i className={`${icon} fs-3 text-white bg-primary  p-3 rounded`}></i>
    </div>
  );
};


export default IconBox;
