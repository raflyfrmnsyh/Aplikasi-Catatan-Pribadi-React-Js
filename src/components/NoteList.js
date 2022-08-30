import React from "react";
import NoteCard from './NoteCard';

const NoteList = ( { label, notes, setNote } ) => {

    return(
        <section className="note-section">
            <h2 className="note-section_header">{label}</h2>
            {notes.length === 0 ? (
                <p className="empty-note">Tidak Ada Catatan</p>
            ) : (
                <div className="note-list">
                    {notes?.map((note) => (
                        <NoteCard 
                            key={note.id}
                            action={setNote}
                            {...note}
                        />
                    ))}
                </div>
            )
        }
        </section>
    )


}

export default NoteList;