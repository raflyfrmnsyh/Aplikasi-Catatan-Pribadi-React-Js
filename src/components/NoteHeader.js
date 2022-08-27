import React from "react";
import { showFormattedDate } from "../utils";

const NoteHeader = ( { title, createdAt } ) => {
    return(
        <div className="note-header">
            <h3>{ title }</h3>
            <small>{ showFormattedDate(createdAt) }</small>
        </div>
    )
}

export default NoteHeader;