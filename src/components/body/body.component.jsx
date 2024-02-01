import React from "react"

import "./body.styles.css"

const Body = ( { displayed }) => {
    if(displayed === "0") {
        return (
            <h4>No email selected, select an email on left to display</h4>
        )
    }
    else {
        return (
            <div className="body">
                <div className="hdr">
                    <h4><b>From:</b> {displayed.from}<br />
                        <b>Address:</b> {displayed.address}<br />
                        <b>Subject:</b> {displayed.subject}<br />
                        <b>Timestamp:</b> {displayed.time}</h4>
                </div>
                <div className="message">
                <p><b>Message:</b><br />{displayed.message}</p>
                </div>
            </div>
        )
    }
}

export default Body;