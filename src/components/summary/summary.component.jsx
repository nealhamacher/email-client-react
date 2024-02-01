import React, { useState } from "react"

import "./summary.styles.css"

const Summary = ( { email, selected, setSelected } ) => {
    const [read, setRead] = useState(email.read);
    const { from, address, time, subject} = email;
  

    function handleClick() {
        setRead("true");
        setSelected(email);
    }

    return (
        <div className="summary">
            <div 
            className={selected.id === email.id ? "selected" : (read === "false" ? "unread" : "read")}
            onClick={handleClick}>
                <b>From:</b> {from} <br />
                <b>Address:</b> {address} <br />
                <b>Subject:</b> {subject} <br />
                <b>Timestamp:</b> {time} <br />
            </div>
        </div>
    )
};

export default Summary;