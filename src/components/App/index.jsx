import React from 'react';
// import PropTypes from 'prop-types';

import CssBaseline from 'material-ui/CssBaseline';
import { withTheme } from 'material-ui/styles';

import ConfirmCode from '../Auth/ConfirmCode/';
import SignIn from '../Auth/SignIn/';
import SignUp from '../Auth/SignUp/';

import APIHealth from '../APIHealth/';
import FormAddNew from '../FormAddNew/';
import FormEdit from '../FormEdit/';
import Home from '../Home/';
import NavBar from '../NavBar/';
import Report from '../Report/';

import pac from '../../package.sl.json';

import './style.css';

import {
    // AuthenticationDetails,
    CognitoUserPool,
    // CognitoUserAttribute,
    // CognitoUser,
} from 'amazon-cognito-identity-js';

const userPool = new CognitoUserPool({
    UserPoolId: 'eu-central-1_pEt8B9Nwt',
    ClientId: '7gsjfk51m5qp4hvknjtlse1enj',
});

class App extends React.Component {
    static propTypes = {};

    constructor (props) {
        super(props);
        this.state = {
            auth: {
                username: '',
            },
            router: {
                path: '',
                params: {},
            },
        };
    }

    componentDidMount() {
        console.log('::: package.json:', pac);
        this.setAuthenticated();
    }

    componentDidUpdate() {
        this.setAuthenticated();
    }

    // Helpers -----------------------------------------------------------------
    setAuthenticated = () => {
        const user = userPool.getCurrentUser();
        if (!user) this.onSetAuth({ username: '' });
        else {
            user.getSession((err, session) => {
                if (err) {
                    console.error(':::', err);
                    this.onSetAuth({ username: '' });
                }
                else {
                    if (!session.isValid()) this.onSetAuth({ username: '' });
                    else this.onSetAuth({ username: user.username });
                }
            });
        }
    }

    onSetAuth = (obj, cb) => JSON.stringify(obj) !== JSON.stringify(this.state.auth) && this.setState({ auth: { ...this.state.auth, ...obj } }, cb);

    onSetRouter = (path, params, cb) => this.setState({ router: { ...this.state.router, path, params } }, cb);

    onSetState = (obj, cb) => this.setState(obj, cb);

    // Main render -------------------------------------------------------------
    render () {
        const propSet = {
            ...this.props,
            appState: this.state,
            onSetAuth: this.onSetAuth,
            onSetRouter: this.onSetRouter,
            onSetState: this.onSetState,
            pac,
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
        if (!this.state.auth.username) {
            switch (this.state.router.path) {
                case ':AUTH:SIGN_UP:': return <SignUp {...propSet} />;
                case ':AUTH:CONFIRM_CODE:': return <ConfirmCode {...propSet} />;
                case ':AUTH:SIGN_IN:':
                default: return <SignIn {...propSet} />;
            }
        }
        else {
            switch (this.state.router.path) {
                case ':API:HEALTH:': return <APIHealth {...propSet} />;
                case ':FORM:ADD_NEW:': return <FormAddNew {...propSet} />;
                case ':FORM:EDIT:': return <FormEdit {...propSet} />;
                case '':
                case ':HOME:': return <Home {...propSet} />;
                case ':REPORT:': return <Report {...propSet} />;

                default: return (
                    <React.Fragment>
                        <h1>404 Not found!</h1>
                        <p><strong>path:</strong> <em>{this.state.router.path}</em></p>
                        <p><strong>params:</strong> <em>{JSON.stringify(this.state.router.params, null, 2)}</em></p>
                    </React.Fragment>
                );
            }
        }
    };
}

export default withTheme()(App);
