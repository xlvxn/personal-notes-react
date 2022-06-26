import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div className="note-app__header-wrapper">
                <div className="note-app__header">
                    <h1>Personal Notes</h1>
                    <input type="text" placeholder="Cari catatan ..." />
                </div>
            </div>
        )
    }
}

export default Header;