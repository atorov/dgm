import React from "react";
// import PropTypes from "prop-types";

import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import Menu, { MenuItem } from 'material-ui/Menu';
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

import IconAccountCircle from '@material-ui/icons/AccountCircle';
// import IconMenu from "@material-ui/icons/Menu";

import "./style.css";

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
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton
                        color="inherit"
                        onClick={() => {}}
                    >
                        <IconMenu />
                    </IconButton> */}
                    <Typography
                        variant="title"
                        color="inherit"
                        style={{ flex: 1 }}
                    >
                        Title
                        </Typography>
                    <IconButton
                        color="inherit"
                        onClick={(event) => this.setState({ anchorEl: event.currentTarget })}
                    >
                        <IconAccountCircle />
                    </IconButton>
                    <Menu
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
                    </Menu>
                </Toolbar>
            </AppBar>
        );
    }
}
