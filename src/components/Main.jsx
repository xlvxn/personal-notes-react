import React from "react";
import Header from "./Header";
import Content from "./Content";

class MainPage extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Content />
            </>
        )
    }
}

export default MainPage;