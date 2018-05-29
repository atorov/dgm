import React from 'react';
// import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
// import Menu, { MenuItem } from 'material-ui/Menu';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

// SVG icons
// import IconAccountCircle from '@material-ui/icons/AccountCircle';
import IconHome from '@material-ui/icons/Home';
// import IconMenu from '@material-ui/icons/Menu';

import pac from '../../package.sl.json';

export default class NavBar extends React.Component {
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        };
    }

    render() {
        console.log(':::', pac);

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
                        {pac.name.toUpperCase()} / {pac.version}
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
                </Toolbar>
            </AppBar>
        );
    }
}
