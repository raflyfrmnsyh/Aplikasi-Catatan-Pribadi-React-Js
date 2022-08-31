import { useState, useEffect } from "react";
import { AddNotes, Header, NoteApp } from "./components/App";
import { getInitialData } from "./utils";

// import "./styles/myStyle.css";


function NoteApps(){

        const [query, setQuery] = useState("");
        const [searchNotes, setSearchNotes] = useState([]);
        const [notes, setNotes] = useState(getInitialData());

        const NoteActive = ( searchNotes || notes ).filter((note) => !note.archived);
        const NoteArchived = ( searchNotes || notes ).filter((note) => note.archived);

        useEffect(() => {
            setSearchNotes(notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())));
        }, [query, notes]);

        return(
            <>

                <Header 
                    search ={query}
                    updateQuery ={setQuery}
                    updateNotes = { setNotes }
                />
                <main className="note-app_main">
                    <AddNotes 
                        updateNotes={ setNotes }
                    />
                    <NoteApp 
                        label="Catatan Anda"
                        notes={ NoteActive }
                        setNotes={setNotes}
                        className="note-section"
                    />
                    <NoteApp 
                        label="Catatan Arsip"
                        notes = { NoteArchived }
                        setNotes = { setNotes }
                        className="note-section"
                    />
                </main>

            </>
        )
        
}

export default NoteApps;