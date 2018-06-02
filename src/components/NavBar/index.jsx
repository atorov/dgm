import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
// import Menu, { MenuItem } from 'material-ui/Menu';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

// SVG icons
// import IconAccountCircle from '@material-ui/icons/AccountCircle';
import IconHome from '@material-ui/icons/Home';
// import IconMenu from '@material-ui/icons/Menu';
import IconPowerSettingsNew from '@material-ui/icons/PowerSettingsNew';

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

export default class NavBar extends React.Component {
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        };
    }

    render() {
        return (
            <AppBar position='static'>
                <Toolbar>
                    {/* <IconButton
                        color='inherit'
                        onClick={() => {}}
                    >
                        <IconMenu />
                    </IconButton> */}
                    <IconButton
                        color='inherit'
                        onClick={(event) => this.props.onSetRouter(':HOME:')}
                    >
                        <IconHome />
                    </IconButton>
                    <Typography
                        variant='title'
                        color='inherit'
                        style={{
                            flex: 1,
                            cursor: 'pointer',
                        }}
                        onClick={(event) => this.props.onSetRouter(':HOME:')}
                    >
                        {this.props.pac.name.toUpperCase()} / {this.props.pac.version}
                    </Typography>
                    {/* <IconButton
                        color='inherit'
                        onClick={(event) => this.setState({ anchorEl: event.currentTarget })}
                    >
                        <IconAccountCircle />
                    </IconButton> */}
                    {/* <Menu
                        anchorEl={this.state.anchorEl}
                        open={!!this.state.anchorEl}
                        onClose={() => this.setState({ anchorEl: null })}
                    >
                        <MenuItem onClick={() => {}}>
                            Option 1
                        </MenuItem>
                        <MenuItem onClick={() => {}}>
                            Option 2
                        </MenuItem>
                    </Menu> */}
                    {this.props.appState.auth.username && (
                        <React.Fragment>
                            <Typography
                                variant='body2'
                                color='inherit'
                                align='right'
                            >
                                {this.props.appState.auth.username}
                            </Typography>
                            <IconButton
                                color='inherit'
                                onClick={() => {
                                    userPool.getCurrentUser().signOut();
                                    this.props.onSetAuth({ username: '' });
                                }}
                            >
                                <IconPowerSettingsNew />
                            </IconButton>
                        </React.Fragment>
                    )}
                </Toolbar>
            </AppBar>
        );
    }
}
