import React from "react";
import InputForm from "./inputForm";

const Header = ( { search, updateQuery } ) => {
    return(
        <header className="header">
            <div className="container">
                <nav className="navbar-top">
                    <div className="header-logo">
                        <h2>rflyfrmsnyah - NoteApps</h2>
                    </div>
                    <InputForm 
                        value = {search}
                        onChange = {updateQuery}
                        type = "search"
                        id = "search-bx"
                        name = "search_note"
                        placeholder = "Search notes..."
                    />
                </nav>
            </div>
        </header>
    )
}

export default Header;