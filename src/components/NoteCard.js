import React from "react";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";
import Button from "./Button";
import { getInitialData } from "../utils";

class NoteCard extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            notes : getInitialData(),
        }


        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
    }

        onDeleteHandler(id){
            const notes = this.state.notes.filter((note) => note.id !== id);
            this.setState({notes});
        }

        onArchiveHandler(id){
            const notes = this.state.notes.map((note) => {
                if(note.id === id){
                    return {...note, archived : !note.archived}
                }
                return note;
            });
            this.setState({notes});
        }

    render(){
        return(
            <div className="note-card">
                <NoteHeader title={"aowkaowk"} createdAt={"asdsa"}/>
                <NoteBody body={"asdasdaksjh"}/>
                <div className="note-footer">
                    <Button 
                        icon={"bx bx-trash"}
                        eventHandler={this.onDeleteHandler}
                    />
                    <Button 
                        icon={"bx bx-archive-in"}
                        eventHandler={this.onArchiveHandler}
                    />
                    
                </div>
            </div>
        )
    }
}

export default NoteCard;