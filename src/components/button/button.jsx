import React from "react";
import "./button.scss";

const Button = ({ text = "Done", onClick }) => {
  return (
    <button className="gradient-btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
