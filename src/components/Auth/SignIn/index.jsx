import React from 'react';

import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import {
    FormControl,
    FormHelperText,
} from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import { LinearProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';

// SVG icons
import IconAccountBox from '@material-ui/icons/AccountBox';
import IconAccountCircle from '@material-ui/icons/AccountCircle';
import IconCheckCircle from '@material-ui/icons/CheckCircle';

import {
    AuthenticationDetails,
    CognitoUserPool,
    // CognitoUserAttribute,
    CognitoUser,
} from 'amazon-cognito-identity-js';

const userPool = new CognitoUserPool({
    UserPoolId: 'eu-central-1_pEt8B9Nwt',
    ClientId: '7gsjfk51m5qp4hvknjtlse1enj',
});

const INIT_STATE = {
    status: '',
    username: '',
    password: '',
};

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...INIT_STATE };
    }

    render() {
        if (this.state.status === ':LOADING:') return <LinearProgress />;

        return (
            <div>
                <div style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Typography variant='title'>
                        Sign In
                    </Typography>
                    <div>
                        <Button
                            style={{ marginRight: this.props.theme.spacing.unit + 'px' }}
                            onClick={() => this.props.onSetRouter(':AUTH:SIGN_UP:')}
                        >
                            <IconAccountBox />&nbsp;Sign Up
                        </Button>
                        <Button
                            style={{ marginRight: this.props.theme.spacing.unit + 'px' }}
                            onClick={() => this.props.onSetRouter(':AUTH:CONFIRM_CODE:')}
                        >
                            <IconCheckCircle />&nbsp;Confirmation
                        </Button>
                        <Button
                            variant='raised'
                            color='primary'
                            disabled={!this.state.username || !this.state.password}
                            onClick={() => {
                                const cognitoUser = new CognitoUser({
                                    Username: this.state.username,
                                    Pool: userPool,
                                });
                                this.setState(
                                    { status: ":LOADING:" },
                                    () => {
                                        cognitoUser.authenticateUser(
                                            new AuthenticationDetails({
                                                Username: this.state.username,
                                                Password: this.state.password,
                                            }),
                                            {
                                                onSuccess: (res) => {
                                                    console.log('::: res:', res);
                                                    this.props.onSetRouter(':HOME:');
                                                },
                                                onFailure: (err) => {
                                                    console.error(':::', err);
                                                    this.setState({ ...INIT_STATE });
                                                },
                                            },
                                        );
                                    },
                                );
                            }}
                        >
                            <IconAccountCircle />&nbsp;Sign In
                        </Button>
                    </div>
                </div>
                <br /><Divider /><br />

                <FormControl
                    error={!this.state.username}
                    fullWidth
                >
                    <InputLabel htmlFor='username'>Username</InputLabel>
                    <Input
                        name='username'
                        value={this.state.username || ''}
                        onChange={(event) => this.setState({ username: event.target.value })}
                    />
                    <FormHelperText>{!this.state.username ? 'Required field!' : null}</FormHelperText>
                </FormControl><br /><br />

                <FormControl
                    error={!this.state.password}
                    fullWidth
                >
                    <InputLabel htmlFor='password'>Password</InputLabel>
                    <Input
                        name='password'
                        type='password'
                        value={this.state.password}
                        onChange={(event) => this.setState({ password: event.target.value })}
                    />
                    <FormHelperText>{!this.state.password ? 'Required field!' : null}</FormHelperText>
                </FormControl>

                <br /><Divider /><br />
            </div>
        );
    }
}
