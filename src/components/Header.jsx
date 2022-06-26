import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            ...this.state,
            search: e.target.value
        })
        this.props.handleSearch(e.target.value)
    }
    render() {
        return (
            <div className="note-app__header-wrapper">
                <div className="note-app__header">
                    <h1>Personal Notes</h1>
                    <input
                        type="text"
                        placeholder="Cari catatan ..."
                        value={this.state.search}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        )
    }
}

export default Header;