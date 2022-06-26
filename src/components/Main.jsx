import React from "react";
import Header from "./Header";
import Content from "./Content";
import NoteList from "./NoteList";
import { getInitialData } from "../utils";
import NoteAdd from "./NoteAdd";

class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allNotes: [],
            notes: []
        }
    }
    
    getNote = (archive = false) => {
        let notes = [...this.state.notes]
        notes = notes.filter(note => note.archived == archive)
        return notes
    }

    updateStatusNote = (id, val) => {
        const notes = [...this.state.allNotes]
        notes[notes.findIndex(note => note.id == id)].archived = val
        this.setState({
            allNotes: notes
        })
    }

    deleteNote = (id) => {
        const notes = [...this.state.allNotes]
        notes.splice(notes.findIndex(note => note.id == id), 1)
        this.setState({
            allNotes: notes
        })
    }

    tambahNote = (form) => {
        const notes = [...this.state.allNotes]
        const newNotes = {
            id: +new Date(),
            title: form.title,
            body: form.body,
            createdAt: new Date(),
            archived: false
        }

        notes.push(newNotes)

        notes.sort(function(a, b){
            return new Date(b.createdAt) - new Date(a.createdAt);
        });

        this.setState({
            ...this.state,
            allNotes: notes,
            notes
        })
    }

    handleSearch = (search) => {
        let notes = [...this.state.allNotes]
        if(search != '') {
            notes = notes.filter(note => note.title.toLowerCase().includes(search.toLowerCase()))
        }
        console.log(notes)
        this.setState({
            ...this.state,
            notes
        })
    }

    componentDidMount() {
        const allNotes = getInitialData()
        const notes = getInitialData()
    
        this.setState({
            ...this.state,
            allNotes,
            notes
        })
    }

    render() {
        return (
            <>
                <Header
                    handleSearch = {this.handleSearch}
                />
                <Content>
                    <NoteAdd
                        tambahNote={this.tambahNote}
                    />

                    <h2>Catatan Aktif</h2>
                    <NoteList
                        notes = {this.getNote()}
                        status = "Aktif"
                        updateStatusNote = {this.updateStatusNote}
                        deleteNote = {this.deleteNote}
                    />

                    <h2>Arsip</h2>
                    <NoteList
                        notes = {this.getNote(true)}
                        status = "Arsip"
                        updateStatusNote = {this.updateStatusNote}
                        deleteNote = {this.deleteNote}
                    />
                </Content>
            </>
        )
    }
}

export default MainPage;