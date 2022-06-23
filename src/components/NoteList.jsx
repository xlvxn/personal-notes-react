import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, status, updateStatusNote }) {
    return (
        <>
            {
                (notes.length > 0) ? (
                    <div className="notes-list">
                        {
                            notes.map((note) => (
                                <NoteItem 
                                    note = { note }
                                    status = { status }
                                    updateStatusNote = { updateStatusNote }
                                />
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