import React from "react";

const Input = (attributes) => {
    const ChangeHandler = (event) => {
        if(attributes.name === "title") {
            const currentText = event.target.value;
            attributes.onChange((oldText) => 
            (currentText.length <= 50 ? currentText : oldText));
        }else{
            attributes.onChange(event.target.value);
        }
    };

    return(
        <>
            {attributes.type === "textarea" ? (
                <textarea
                    {...attributes}
                    className="inputArea"
                    value={attributes.value}
                    spellCheck={false}
                    onChange={ChangeHandler}
                />
            ) : (
                <input 
                    {...attributes}
                    className="input"
                    spellCheck={false}
                    value={attributes.value}
                    onChange={ChangeHandler}
                />
            )}
        </>
    )

}

export default Input;