import React from "react";
import { showFormattedDate } from "../utils";
import NoteHead from "./NoteHead";
import NoteBody from "./NoteBody";
import Button from "./Button";



const NoteCard = ( { id, title, createdAt, body, archived, action } ) => {

    function DeleteButton(item){
        action((notes) => notes.filter((note) => note.id !== item));
        alert('Catatan Terhapus');
    }
    function ArchiveButton(item){
        action((notes) => 
            notes.map((note) => {
                if(note.id === item){
                    return {...note, archived: !note.archived}
                }
                return note;
            })
        )
    }


    return(
        <div className="note-item">
            <NoteHead 
                title={title}
                createdAt={showFormattedDate(createdAt)}
            />
            <NoteBody 
                body={body}
            />
            <div className="note-footer">
                <Button eventHandler={() => DeleteButton(id)} icons='bx bx-trash' l={'trash'}/>
                <Button eventHandler={() => ArchiveButton(id)} icons={archived ? 'bx bx-archive-out' : 'bx bx-archive-in'} l={'archive'}/>
            </div>
        </div>
    )


}   

export default NoteCard;