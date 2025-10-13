import React from "react";
import "./button.scss";

const Button = (props) => {
    return (
        <button className={`gradient-btn btn ${props?.type} ${props?.size} `} onClick={props.onClick}>
            {props?.text}
        </button>
    );
};





export default Button;
