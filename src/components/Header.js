import React from "react";
import Input from "./Input";

const Header = ( {search, updateQuery} ) => {
    return(
        <header className="header">
            <div className="container">
                <nav>
                    <div className="nav-logo">
                        <h2>NoteApps - rflyfrmnsyh</h2>
                    </div>
                    <div className="search-box">
                        <Input 
                            value={search}
                            onChange={updateQuery}
                            type="search"
                            name = "search-note"
                            placeholder = "Temukan Catatan..."
                        />
                    </div>
                </nav>
            </div>
        </header>
    )
}


export default Header;