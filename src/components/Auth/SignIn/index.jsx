import React from 'react';

// import moment from 'moment';

import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
// import {
//     FormControl,
//     FormControlLabel,
//     FormHelperText,
// } from 'material-ui/Form';
// import Input from 'material-ui/Input';
// import { LinearProgress } from 'material-ui/Progress';
// import Switch from 'material-ui/Switch';
import Typography from 'material-ui/Typography';

// SVG icons
import IconAccountBox from '@material-ui/icons/AccountBox';
import IconAccountCircle from '@material-ui/icons/AccountCircle';
import IconCheckCircle from '@material-ui/icons/CheckCircle';

export default class extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             status: '',
//             data: {},
//         };
//     }

//     componentDidMount () {
//         this.props.lib.getForm(':SINGLE:', { id: this.props.lib.getDeepValue(this.props, 'appState.router.params.id') })
//             .then((res) => {
//                 this.setState({
//                     status: ':READY:',
//                     data: {
//                         id: this.props.lib.getDeepValue(res, 'id.S'),
//                         dgs: this.props.lib.getDeepValue(res, 'dgs.S'),
//                         vac: this.props.lib.getDeepValue(res, 'vac.N'),
//                         vdc: this.props.lib.getDeepValue(res, 'vdc.N'),
//                         notes: this.props.lib.getDeepValue(res, 'notes.S'),
//                         status: this.props.lib.getDeepValue(res, 'status.S'),
//                         createdAt: +this.props.lib.getDeepValue(res, 'createdAt.N'),
//                         updatedAt: +this.props.lib.getDeepValue(res, 'updatedAt.N'),
//                         owner: this.props.lib.getDeepValue(res, 'owner.S'),
//                     },
//                 });
//             })
//             .catch((reason) =>console.error(':::', reason));
//     }

    render() {
//         if (this.state.status !== ':READY:') return <LinearProgress />;

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
                            onClick={() => {}}
                        >
                            <IconAccountCircle />&nbsp;Sign In
                        </Button>
                    </div>
                </div>
                <br /><Divider /><br />

                {/* <FormControl fullWidth>
                    <Input
                        name='id'
                        value={this.state.data.id || ''}
                        disabled
                    />
                    <FormHelperText>Document ID</FormHelperText>
                </FormControl><br /><br /> */}

                {/* <FormControl fullWidth>
                    <Input
                        name='dgs'
                        value={this.state.data.dgs || ''}
                        onChange={(event) => this.setState({
                            data: {
                                ...this.state.data,
                                dgs: event.target.value,
                            },
                        })}
                    />
                    <FormHelperText>DGS type</FormHelperText>
                </FormControl><br /><br /> */}

                {/* <FormControl >
                    <Input
                        name='vac'
                        value={this.state.data.vac || ''}
                        onChange={(event) => this.setState({
                            data: {
                                ...this.state.data,
                                vac: +event.target.value,
                            },
                        })}
                    />
                    <FormHelperText>AC voltage, [VAC]</FormHelperText>
                </FormControl><br /><br /> */}

                {/* <FormControl>
                    <Input
                        name='vdc'
                        value={this.state.data.vdc || ''}
                        onChange={(event) => this.setState({
                            data: {
                                ...this.state.data,
                                vdc: +event.target.value,
                            },
                        })}
                    />
                    <FormHelperText>DC voltage, [VAC]</FormHelperText>
                </FormControl><br /><br /> */}

                {/* <FormControl fullWidth>
                    <Input
                        name='notes'
                        value={this.state.data.notes || ''}
                        multiline
                        onChange={(event) => this.setState({
                            data: {
                                ...this.state.data,
                                notes: event.target.value,
                            },
                        })}
                    />
                    <FormHelperText>Additional notes</FormHelperText>
                </FormControl><br /><br /> */}

                {/* <FormControlLabel
                    control={
                        <Switch
                            checked={this.state.data.status === ':COMPLETED:'}
                            color='primary'
                            onChange={(event) => this.setState({
                                data: {
                                    ...this.state.data,
                                    status: event.target.checked ? ':COMPLETED:' : ':IN_PROGRESS:',
                                },
                            })}
                        />
                    }
                    label='Completed'
                /><br /><br /> */}

                {/* <Typography variant='caption'>
                    Created at:
                    </Typography>
                <Typography variant='body2'>
                    {moment.unix(this.state.data.createdAt).format('YYYY-MM-DD HH:mm')}
                </Typography><br /> */}

                {/* <Typography variant='caption'>
                    Updated at:
                    </Typography>
                <Typography variant='body2'>
                    {moment.unix(this.state.data.updatedAt).format('YYYY-MM-DD HH:mm')}
                </Typography><br /> */}

                {/* <Typography variant='caption'>
                    Owner:
                    </Typography>
                <Typography variant='body2'>
                    {this.state.data.owner}
                </Typography><br /> */}

                <br /><Divider /><br />
            </div>
        );
    }
}
