import React from 'react';
// import PropTypes from 'prop-types';

import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Typography
                    variant='title'
                    color='inherit'
                >
                    Home Page
                </Typography>
                <br /><Divider /><br />

                <br /><Divider /><br />
                <Button variant='raised' color='primary'>
                    Button
                </Button>
            </div>
        );
    }
}
