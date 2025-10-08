import React from "react";
import "./input_field.scss";

const InputField = () => {
  return (
    <div className="input-container">
      <label htmlFor="firstName" className="input-label">
        First name
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        className="text-input"
      />
    </div>
  );
};

export default InputField;
