import React from "react";

const InputForm = ( attributes ) => {
    const changeHandler = (event) => {
      if (attributes.name === "title") {
        const currentText = event.target.value;
        attributes.onChange((oldText) => (currentText.length <= 50 ? currentText : oldText));
      } else {
        attributes.onChange(event.target.value);
      }
    };

    return(
        <div>
            {attributes.type === "textarea" ? (
                <textarea 
                    {...attributes}
                    className="input-form_textarea"
                    value ={attributes.value}
                    spellCheck={false}
                    onChange={changeHandler}
                /> ) : (
                    <input
                    {...attributes}
                    className="input-form_input"
                    spellCheck={false}
                    value={attributes.value}
                    onChange={changeHandler}
                  />
            )}
        </div>
    );
};

export default InputForm;