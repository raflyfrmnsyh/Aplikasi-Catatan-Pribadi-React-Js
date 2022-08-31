import React from "react";
import InputForm from "./inputForm";

const Header = ( { search, updateQuery } ) => {
    return(
        <header className="header">
            <div className="container">
                <img className="header-logo" src="./images/logo.png"/>
                <InputForm 
                    value = {search}
                    onChange = {updateQuery}
                    type = "search"
                    id = "header-search"
                    name = "search_note"
                    placeholder = "Search notes..."
                />
            </div>
        </header>
    )
}

export default Header;