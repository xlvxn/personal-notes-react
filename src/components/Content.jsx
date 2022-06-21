import React from "react";

function Content ({ children }) {
    return (
        <div className="note-app__body">
            { children }
        </div>
    )
}

export default Content;