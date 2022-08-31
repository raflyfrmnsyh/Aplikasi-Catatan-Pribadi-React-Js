import React from "react";


function Button({label, eventHandler}){
    return(
        <button className="note-btn" type="button" onClick={eventHandler} data-action={label}>
            {label}
        </button>
    )
}

export default Button;