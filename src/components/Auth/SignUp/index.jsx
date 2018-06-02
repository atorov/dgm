import React from 'react';

import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import {
    FormControl,
    FormHelperText,
} from 'material-ui/Form';
import Input, { InputLabel }from 'material-ui/Input';
import { LinearProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';

// SVG icons
import IconAccountBox from '@material-ui/icons/AccountBox';
import IconCancel from '@material-ui/icons/Cancel';

import {
    CognitoUserPool,
    CognitoUserAttribute,
    // CognitoUser,
} from 'amazon-cognito-identity-js';

const userPool = new CognitoUserPool({
    UserPoolId: 'eu-central-1_pEt8B9Nwt',
    ClientId: '7gsjfk51m5qp4hvknjtlse1enj',
});

const INIT_STATE = {
    status: '',
    username: '',
    email: '',
    password: '123',
};

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = INIT_STATE;
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
                        Sign Up
                    </Typography>
                    <div>
                        <Button
                            onClick={() => this.props.onSetRouter(':HOME:')}
                            style={{ marginRight: this.props.theme.spacing.unit + 'px' }}
                        >
                            <IconCancel />&nbsp;Cancel
                        </Button>
                        <Button
                            variant='raised'
                            color='primary'
                            disabled={!this.state.username || !this.state.email || !this.state.password}
                            onClick={() => {
                                this.setState(
                                    { status: ':LOADING:'},
                                    () => {
                                        userPool.signUp(
                                            this.state.username,
                                            this.state.password,
                                            [ // attribute list:
                                                new CognitoUserAttribute({
                                                    Name: 'email',
                                                    Value: this.state.email,
                                                }),
                                            ],
                                            null,
                                            (err, res) => {
                                                if (err) {
                                                    console.error(':::', err);
                                                    return this.setState(INIT_STATE);
                                                }
                                                console.log('::: res:', res);
                                                this.setState({ status: ':READY:' });
                                            },
                                        );
                                    }
                                )
                            }}
                        >
                            <IconAccountBox />&nbsp;Sign Up
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
                    error={!this.state.email}
                    fullWidth
                >
                    <InputLabel htmlFor='email'>Email</InputLabel>
                    <Input
                        name='email'
                        value={this.state.email || ''}
                        onChange={(event) => this.setState({ email: event.target.value })}
                    />
                    <FormHelperText>{!this.state.email ? 'Required field!' : null}</FormHelperText>
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
