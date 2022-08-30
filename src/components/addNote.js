import React from "react";
import { useState } from "react";
import Input from "./Input";

const AddNote = ( { updateNotes } ) => {
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");

    function CreateNote(event){
        event.preventDefault();
        const timestamp = new Date().toISOString();

        updateNotes((notes) => [
            ...notes,
            {id : timestamp, title, body: note, archived: false, createdAt : timestamp},
        ]);
    }


    return (
        <form className="addNote_Form" onSubmit={CreateNote()}>
            <h2 className="AddNote_header">Buat Catatan</h2>
            <small className="AddNote_small">
                Remining Character : <span className="AddNote_Counter">
                    {50 - title.length}
                </span>
            </small>

            <div className="AddNote_Input">
                <Input 
                    value={title}
                    onChange={setTitle}
                    type='text'
                    placeholder='Judul Catatan...'
                    id='title'
                    name ='title'
                    required
                />
                <Input
                    value={note}
                    onChange={setNote}
                    type='textarea'
                    placeholder='Catat Sesuatu...'
                    id='note'
                    name='note'
                    required
                />
                <Input 
                    type='submit'
                    id='submit_form'
                    name='submit_form'
                    value='Tambahkan'
                />
            </div>
        </form>
    )

}

export default AddNote;