import React from "react";

class NoteAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                title: '',
                body: ''
            },
            titleLimit: 50
        }
    }

    updateStatusLimit = (e) => {
        const form = {...this.state.form}
        if(e.target.name == 'title' && e.target.value.length > 50) {
            return false
        }

        form[e.target.name] = e.target.value

        this.setState({
            form,
            titleLimit : 50 - form.title.length
        })
    }

    submitAction = (e) => {
        e.preventDefault()
        this.setState({
            form: {
                title: '',
                body: ''
            },
            titleLimit: 50
        })
        this.props.tambahNote(this.state.form)
    }

    render() {
        return (
            <div className='note-input-wrapper'>
                <div className='note-input'>
                    <h2>Buat catatan</h2>
                    <form onSubmit={this.submitAction}>
                        <p className="note-input__title__char-limit">
                            Sisa karakter : { this.state.titleLimit }
                        </p>
                        <input
                            className="note-input__title"
                            type="text"
                            placeholder="Ini adalah judul ..."
                            value={this.state.form.title}
                            name="title"
                            onChange={this.updateStatusLimit}
                            required
                        />
                        <textarea
                            className="note-input__body"
                            type="text"
                            name="body"
                            placeholder="Tuliskan catatanmu di sini ..."
                            value={this.state.form.body}
                            onChange={this.updateStatusLimit}
                            required
                        >
                        </textarea>

                        <button type="submit">Buat</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NoteAdd;