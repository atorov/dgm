import React from "react";
// import PropTypes from "prop-types";

import CssBaseline from "material-ui/CssBaseline";
import { withTheme } from "material-ui/styles";

import Home from "../Home/";
import NavBar from "../NavBar/";

import "./style.css";

class App extends React.Component {
    static propTypes = {};

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
                <NavBar />
                <div style={{ padding: this.props.theme.spacing.unit * 2 }}>
                    {this.router()}
                </div>
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

export default withTheme()(App);
