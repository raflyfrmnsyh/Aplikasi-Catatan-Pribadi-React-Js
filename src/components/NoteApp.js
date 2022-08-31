import React from "react";
import NoteCard from "./NoteCard";


const NoteApp = ( { label, notes, setNotes } ) => {
    return(
        
        <section className="note-app">
            <div className="container">
                <h2 className="note-app_header">{label}</h2>
                {notes.length === 0 ?  (
                        <p className="empty-note"> Tidak ada catatan. </p>
                    ) : (
                        <div className="note-app_list">
                            {
                                notes?.map((note) => (
                                    <NoteCard key={note.id} action={setNotes} {...note} />
                                ))
                            }
                        </div>
                    )
                }
            </div>
            
        </section>

    )
}

export default NoteApp;