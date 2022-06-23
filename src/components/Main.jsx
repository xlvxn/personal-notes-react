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
    
    getNote = () => {
        let notes = [...this.state.allNotes]
        return notes
    }

    componentDidMount() {
        const allNotes = getInitialData()
    
        this.setState({
            allNotes
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
                    />

                    <h2>Arsip</h2>
                    <NoteList
                        notes = {this.getNote()}
                        status = "Arsip"
                    />
                </Content>
            </>
        )
    }
}

export default MainPage;