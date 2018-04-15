import React from "react";
import PropTypes from "prop-types";

import CssBaseline from "material-ui/CssBaseline";

import Home from "../Home/";

import "./style.css";

export default class App extends React.Component {
    static propTypes = {
        lib: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            router: {
                path: "",
                params: {},
            },
        };
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                {this.router()}
            </React.Fragment>
        );
    }

    // Router ------------------------------------------------------------------
    router = () => {
        const propSet = {
            ...this.props,
            appState: this.state,
            onSetState: (obj, cb) => this.setState(obj, cb),
        };
        switch (this.state.router.path) {
            case "":
            case "home": return <Home {...propSet} />;

            default: return <h1>404 Not found!</h1>;
        }
    };
}
