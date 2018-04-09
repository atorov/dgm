import React from "react";
import PropTypes from "prop-types";

import logo from "../../assets/img/logo.svg";

import "./style.css";

export default class App extends React.Component {
    static propTypes = {
        lib: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            forms: {
                all: {
                    status: "",
                    data: [],
                },
                selected: {
                    status: "",
                    data: {},
                },
            },
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/...</code> and save to reload.
                </p>
            </div>
        );
    }
}
