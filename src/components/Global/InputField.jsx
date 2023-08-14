import React from "react";
import "./InputField.scss";

function InputField(props) {
    
    return (
        <div className={props.className ? props.className : "input-container"}>
            <p className="text-container">{props.textDisplay}</p>
            <input
                className="input-container"
                type={props.type}
                placeholder={props.placeholder}
                name={props.className}
                // value={props.value}
            />
        </div>
    );
}

export default InputField;
