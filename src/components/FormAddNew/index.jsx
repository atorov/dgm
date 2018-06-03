import React from 'react';

import moment from 'moment';

import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import {
    FormControl,
    FormControlLabel,
    FormHelperText,
} from 'material-ui/Form';
import Input from 'material-ui/Input';
import { LinearProgress } from 'material-ui/Progress';
import Switch from 'material-ui/Switch';
import Typography from 'material-ui/Typography';

// SVG icons
import IconCancel from '@material-ui/icons/Cancel';
import IconSave from '@material-ui/icons/Save';

export default class extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            status: ':READY:',
            data: {
                dgs: '',
                vac: null,
                vdc: null,
                notes: '',
                status: ':IN_PROGRESS:',
                createdAt: moment().unix(),
                updatedAt: moment().unix(),
                owner: this.props.appState.auth.username,
            },
        };
    }

    render () {
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
                        Add new
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
                            onClick={() => this.setState(
                                { status: ':PENDING:' },
                                () => this.props.lib.createForm(
                                    {
                                        ...this.state.data,
                                        updatedAt: moment().unix(),
                                    },
                                    this.props.appState.auth.idToken,
                                )
                                    .then((res) =>  this.props.onSetRouter(':FORM:EDIT:', { id: res.id }))
                                    .catch((reason) =>  console.error(':::', reason)),
                            )}
                        >
                            <IconSave />&nbsp;Save
                        </Button>
                    </div>
                </div>
                <br /><Divider /><br />

                <FormControl fullWidth>
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
                </FormControl><br /><br />

                <FormControl>
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
                </FormControl><br /><br />

                <FormControl>
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
                </FormControl><br /><br />

                <FormControl fullWidth>
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
                </FormControl><br /><br />

                <FormControlLabel
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
                /><br /><br />

                <Typography variant='caption'>
                    Created at:
                </Typography>
                <Typography variant='body2'>
                    {moment.unix(this.state.data.createdAt).format('YYYY-MM-DD HH:mm')}
                </Typography><br />

                <Typography variant='caption'>
                    Owner:
                </Typography>
                <Typography variant='body2'>
                    {this.state.data.owner}
                </Typography><br />

                <br /><Divider /><br />
            </div>
        );
    }
}
