import React from "react";

const NoteHeader = ( { title, createdAt } ) => {
    return(
        <div className="note-header">
            <h3>{ title }</h3>
            <small>{ createdAt }</small>
        </div>
    )
}

export default NoteHeader;