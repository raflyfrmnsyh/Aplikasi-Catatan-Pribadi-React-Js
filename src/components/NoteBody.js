import React from "react";

const NoteBody = ( { body } ) => {

    return (
        <div className="note-body">
            <p>
                { body }
            </p>
        </div>
    )

}

export default NoteBody;