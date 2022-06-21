import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes }) {
    return (
        <>
            {
                (notes.length > 0) ? (
                    <div className="notes-list">
                        {
                            notes.map((note) => (
                                <NoteItem note={note} />
                            ))
                        }
                    </div>
                ) : (
                    <p className="notes-list__empty-message">
                        Tidak ada catatan
                    </p>
                )
            }
        </>
    )
}

export default NoteList;