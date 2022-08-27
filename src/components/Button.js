import React from "react";

const Button = ( { icon, eventHandler } ) => {

    return(
        <button type="button" className="btn" onClick={ eventHandler }>
            <i className={icon}></i>
        </button>
    )

}

export default Button;