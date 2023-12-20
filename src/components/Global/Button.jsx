import React from "react";

function Button(props) {
    return (
        <button className={props.className} type={props.type} onFocus={props.onFocus}>
            {props.buttonContent}
        </button>
    );
}

export default Button;
