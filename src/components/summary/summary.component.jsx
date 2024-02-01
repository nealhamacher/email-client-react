import React from "react"

import "./summary.styles.css"

const Summary = ( { email, selected, handleRead} ) => {
    const { from, address, time, subject, read,id} = email;
    return (
        <div className="summary">
            <div 
            className={selected.id===id? 'selected' : (read==='true'?'read':'unread')}
            onClick={()=>handleRead(id)}>
                <b>From:</b> {from} <br />
                <b>Address:</b> {address} <br />
                <b>Subject:</b> {subject} <br />
                <b>Timestamp:</b> {time} <br />
            </div>
        </div>
    )
};

export default Summary;