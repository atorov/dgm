import React from "react";
// import PropTypes from "prop-types";

import Button from "material-ui/Button";

import "./style.css";

export default class Home extends React.Component {
    static propTypes = {
        // lib: PropTypes.object.isRequired,
    };

    render() {
        return (
            <div>
                <h1>Home page</h1>

                <Button variant="raised" color="primary">
                    Button
                </Button>
            </div>
        );
    }
}
