import React from "react";
import { useState } from "react";
import InputForm from "./inputForm";

const AddNotes = ({ updateNotes }) => {

        const [title, setTitle] = useState("");
        const [note, setNote] = useState("");

            const CreateNote = (event) => {
                event.preventDefault();
                const timeTamp = new Date().toISOString();

                updateNotes((notes) => [
                    ...notes,
                    { id: timeTamp, title, body: note , archived:false , createdAt: timeTamp},
                ]);

            };

        return(
            <form className="add-note" onSubmit={ CreateNote }>
                <div className="container">
                    <div className="add-note_form">
                        <div className="add-note_header">
                            <h2>Tambah Catatan</h2>
                            <small className="add-note_small">
                                    Remining character : <span className="add-note_counter"> {50 - title.length} </span>
                            </small>
                        </div>
                        <div className="add-note_input">
                            
                            <InputForm 
                                value = { title }
                                onChange = { setTitle }
                                type = "text"
                                placeholder = " title "
                                id = "title_input"
                                name = "title"
                                required
                            /> 

                            <InputForm 
                                value = { note }
                                onChange = { setNote }
                                type = 'textarea'
                                placeholder = ' Tulis Catatanmu... '
                                id = 'note_input'
                                name = ' note '
                                required
                            />

                            <InputForm 
                                type = 'submit'
                                id = 'button_submit'
                                name = 'button_submit'
                                value = ' Tambahkan '              
                            />
                        </div>
                    </div>
                    
                </div>
            </form>
        )
}


export default AddNotes;