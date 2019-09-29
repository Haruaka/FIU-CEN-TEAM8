import React from "react";
import Header from "../Header";
import NavBar from "../NavBar";
import Footer from "../Footer";

class HomePage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className='body'>
                    <Header />
                    <NavBar />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default HomePage;