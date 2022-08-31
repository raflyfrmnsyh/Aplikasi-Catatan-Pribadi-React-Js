import React from "react";

const Button = ( { icons, eventHandler} ) => {
    return(
        <button className="note-btn" type="button" onClick={eventHandler}>
            <i className={icons}></i>
        </button>
    )
}

export default Button;