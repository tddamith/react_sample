import React from "react";
// import PropTypes from "prop-types";
import "./index.scss";

const Textbox = ({
  size = "lg",
  label = "First name",
  error = "",
  placeholder = "Type here..",
  name,
  onChange,
  value,
  disabled = false,
}) => {
  const inputClass = `text-input ${size} ${error ? "error" : ""}`.trim();

  return (
    <div className="input-container">
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        className={inputClass}
        placeholder={placeholder}
        data-size={size}
        disabled={disabled}
      />

      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

// InputField.propTypes = {
//   size: PropTypes.oneOf(["lg", "md", "sm"]),
//   label: PropTypes.string,
//   error: PropTypes.string,
//   placeholder: PropTypes.string,
//   name: PropTypes.string.isRequired,
// };

export default Textbox;
