import React from 'react';
import ReactJson from 'react-json-view'

import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import { LinearProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';

// SVG icons
import IconKeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: '',
            res: {},
        };
    }

    componentDidMount () {
        this.props.lib.getAPIHealth(this.props.appState.auth.idToken)
            .then((res) => this.setState({ status: ':READY:', res }))
            .catch((reason) => console.error(':::', reason));
    }

    render() {
        if (this.state.status !== ':READY:') return <LinearProgress />;

        return (
            <div>
                <div style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Typography variant='title'>
                        API Health
                    </Typography>
                    <div>
                        <Button
                            variant='raised'
                            onClick={() => this.props.onSetRouter(':HOME:')}
                        >
                            <IconKeyboardArrowLeft />&nbsp;Back
                        </Button>
                    </div>
                </div>
                <br /><Divider /><br />
                <ReactJson src={this.state.res} />
                <br /><Divider /><br />
            </div>
        );
    }
}
