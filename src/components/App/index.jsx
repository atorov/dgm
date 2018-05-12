import React from 'react';
// import PropTypes from 'prop-types';

import CssBaseline from 'material-ui/CssBaseline';
import { withTheme } from 'material-ui/styles';

import FormAddNew from '../FormAddNew/';
import FormEdit from '../FormEdit/';
import Home from '../Home/';
import NavBar from '../NavBar/';
import Report from '../Report/';

import './style.css';

class App extends React.Component {
    static propTypes = {};

    constructor (props) {
        super(props);
        this.state = {
            router: {
                path: '',
                params: {},
            },
        };
    }

    // Helpers -----------------------------------------------------------------
    onSetRouter = (path, params, cb) => this.setState({ router: { ...this.state.router, path, params } }, cb);

    onSetState = (obj, cb) => this.setState(obj, cb);

    // Main render -------------------------------------------------------------
    render () {
        const propSet = {
            ...this.props,
            appState: this.state,
            onSetRouter: this.onSetRouter,
            onSetState: this.onSetState,
        };

        return (
            <div className='app'>
                <CssBaseline />
                <NavBar {...propSet} />
                <div style={{ padding: this.props.theme.spacing.unit * 2 }}>
                    {this.router(propSet)}
                </div>
            </div>
        );
    }

    // Router ------------------------------------------------------------------
    router = (propSet) => {
        switch (this.state.router.path) {
            case '':
            case ':HOME:': return <Home {...propSet} />;
            case ':FORM:ADD_NEW:': return <FormAddNew {...propSet} />;
            case ':FORM:EDIT:': return <FormEdit {...propSet} />;
            case ':REPORT:': return <Report {...propSet} />;

            default: return (
                <React.Fragment>
                    <h1>404 Not found!</h1>
                    <p><strong>path:</strong> <em>{this.state.router.path}</em></p>
                    <p><strong>params:</strong> <em>{JSON.stringify(this.state.router.params, null, 2)}</em></p>
                </React.Fragment>
            );
        }
    };
}

export default withTheme()(App);
