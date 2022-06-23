import React from "react";
import Header from "./Header";
import Content from "./Content";
import NoteList from "./NoteList";
import { getInitialData } from "../utils";

class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allNotes: [],
            notes: [],
            aksi: ''
        }
    }
    
    getNote = (archive = false) => {
        let notes = [...this.state.allNotes]
        notes = notes.filter(note => note.archived == archive)
        return notes
    }

    componentDidMount() {
        const allNotes = getInitialData()
    
        this.setState({
            allNotes
        })
    }

    updateStatusNote = (id, val) => {
        const notes = [...this.state.allNotes]
        notes[notes.findIndex(note => note.id == id)].archived = val
        this.setState({
            ...this.state,
            notes,
            allNotes: notes
        })
    }

    render() {
        return (
            <>
                <Header />
                <Content>
                    <h2>Catatan Aktif</h2>
                    <NoteList
                        notes = {this.getNote()}
                        status = "Aktif"
                        updateStatusNote = {this.updateStatusNote}
                    />

                    <h2>Arsip</h2>
                    <NoteList
                        notes = {this.getNote(true)}
                        status = "Arsip"
                        updateStatusNote = {this.updateStatusNote}
                    />
                </Content>
            </>
        )
    }
}

export default MainPage;