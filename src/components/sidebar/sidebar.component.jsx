import React from "react"
import Summary from "../summary/summary.component";
import SearchBar from "../searchbar/searchbar.component"

import "./sidebar.styles.css"

const Sidebar = ({ emails, selected, handleRead, setFilteredEmails, handleInput }) => (
    <div className="sidebar">
        <SearchBar placeholder="Filter by subject" handleInput={handleInput}></SearchBar>
        {emails.map(email => (
            <Summary key={email.id} email={email} selected={selected} 
                     handleRead={handleRead} />
        ))}
    </div>
    
);

export default Sidebar;