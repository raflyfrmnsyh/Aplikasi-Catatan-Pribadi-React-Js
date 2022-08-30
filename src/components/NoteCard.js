import React from "react";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";
import Button from "./Button";
import { showFormattedDate } from "../utils";


const NoteCard = ( { id, title, createdAt, body, archived, action } ) => {
    function DeleteNote(item) {
        action((notes) => notes.filter((note) => note.id !== item));
    }

    function ArchiveNote(item) {
        action((notes) => 
            notes.map((note) => {
                if(note.id === item){
                    return { ...note, archived: !note.archived};
                }
                return note;
            })
        )
    }


    return(
        <div className="note-card">
            <NoteHeader 
                title={title}
                createdAt={showFormattedDate(createdAt)}
            />
            <NoteBody body={body} />
            <div className="note-footer">
                <Button
                    eventHandler={() => DeleteNote(id)}
                    icon={'bx bx-trash'}
                />
                <Button 
                    eventHandler={() => ArchiveNote(id)}
                    icon={archived ? 'bx bx-archive-out' : 'bx bx-archive-in'}
                />
            </div>
        </div>
    )


}




export default NoteCard;