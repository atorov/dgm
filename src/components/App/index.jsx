import React from 'react';
// import PropTypes from 'prop-types';

import CssBaseline from 'material-ui/CssBaseline';
import { withTheme } from 'material-ui/styles';

import Home from '../Home/';
import NavBar from '../NavBar/';

import './style.css';

class App extends React.Component {
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            router: {
                path: '',
                params: {},
            },
        };
    }

    // Helpers -----------------------------------------------------------------
    onSetRouter = (path, params) => this.setState({ router: { ...this.state.router, path, params } });

    onSetState = (obj, cb) => this.setState(obj, cb);

    // Main render -------------------------------------------------------------
    render() {
        const propSet = {
            ...this.props,
            appState: this.state,
            onSetRouter: this.onSetRouter,
            onSetState: this.onSetState,
        };

        return (
            <React.Fragment>
                <CssBaseline />
                <NavBar {...propSet} />
                <div style={{ padding: this.props.theme.spacing.unit * 2 }}>
                    {this.router(propSet)}
                </div>
            </React.Fragment>
        );
    }

    // Router ------------------------------------------------------------------
    router = (propSet) => {
        switch (this.state.router.path) {
            case '':
            case ':HOME:': return <Home {...propSet} />;

            default: return <h1>404 Not found!</h1>;
        }
    };
}

export default withTheme()(App);
