import React from "react";

function NoteItem({ note }){
    return (
        <div className="note-item">
            <div className="note-item__content">
                <h3 className="note-item__title">
                    { note.title }
                </h3>
            </div>
        </div>
    )
} 

export default NoteItem;