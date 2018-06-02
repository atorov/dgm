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
import IconCancel from '@material-ui/icons/Cancel';
import IconCheckCircle from '@material-ui/icons/CheckCircle';

import {
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
    code: '',
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
                        Confirmation Code
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
                            disabled={!this.state.username || !this.state.code}
                            onClick={() => {
                                this.setState(
                                    { status: ':LOADING:'},
                                    () => {
                                        const cognitoUser = new CognitoUser({
                                            Username: this.state.username,
                                            Pool: userPool,
                                        });
                                        cognitoUser.confirmRegistration(
                                            '' + this.state.code,
                                            true,
                                            (err, res) => {
                                                if (err) {
                                                    console.error(':::', err);
                                                    return this.setState({ ...INIT_STATE });
                                                }
                                                console.log('::: res:', res);
                                                this.props.onSetRouter(':AUTH:SIGN_IN:');
                                            },
                                        );

                                    }
                                )
                            }}
                        >
                            <IconCheckCircle />&nbsp;Confirm
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
                    error={!this.state.code}
                    fullWidth
                >
                    <InputLabel htmlFor='code'>Confirmation code</InputLabel>
                    <Input
                        name='code'
                        value={this.state.code || ''}
                        onChange={(event) => this.setState({ code: +event.target.value })}
                    />
                    <FormHelperText>{!this.state.code ? 'Required field!' : null}</FormHelperText>
                </FormControl><br /><br />

                <br /><Divider /><br />
            </div>
        );
    }
}
