import React from "react";
import { showFormattedDate } from "../utils";
import Button from "./Button";


const NoteCard = ( { id, title, createdAt, body, archived, action } ) => {

    const deleteBtn = ( item ) => action((notes) => notes.filter((note) => note.id !== item));
    
    const archivedBtn = ( item ) => {
        action((notes) => 
            notes.map((note) => {
                if(note.id === item){
                    return { ...note, archived: !note.archived };
                }
                return note;
            }),
        );
    };


    return (
        <div className="note-card" id={id}>
            <header className="note-card_header">
                <h3 className="card_header-title">{title}</h3>
                <small className="card_header-date">{showFormattedDate(createdAt)}</small>
            </header>
            <p className="note-body">{ body }</p>
            <footer className="note-card_footer">
                <Button eventHandler={() => deleteBtn(id)} label="delete"></Button>
                <Button eventHandler={() => archivedBtn(id)} label={archived ? "unarchived" : "archive"}></Button>
            </footer>
        </div>
    )
}

export default NoteCard;