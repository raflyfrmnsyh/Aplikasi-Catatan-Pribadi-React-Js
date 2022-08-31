const NoteHead = ( { title, createdAt } ) => {
    return(
        <div className="note-header">
            <h2 className="note-title">{title}</h2>
            <small className="note-date">{createdAt}</small>
        </div>
    )
}

export default NoteHead;