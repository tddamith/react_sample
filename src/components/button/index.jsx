import React from "react";
import "./button.scss";

const Button = ({ text, type, size, disabled, onClick }) => { // i use this prop to handle click events
  const buttonType = disabled ? "disabled" : type;
  return (
    <button
      className={`btn-primary ${buttonType} ${size}`}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
