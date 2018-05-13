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
import IconDelete from '@material-ui/icons/Delete';
import IconSave from '@material-ui/icons/Save';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: '',
            data: {},
        };
    }

    componentDidMount () {
        this.props.lib.getForm(':SINGLE:', { id: this.props.lib.getDeepValue(this.props, 'appState.router.params.id') })
            .then((res) => this.setState({ status: ':READY:', data: res[0] || {} }))
            .catch((reason) =>console.error(':::', reason));
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
                        Edit
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
                            style={{ marginRight: this.props.theme.spacing.unit + 'px' }}
                            onClick={() => this.setState(
                                { status: ':PENDING:' },
                                () => {
                                    const data = {
                                        ...this.state.data,
                                        updatedAt: moment().unix(),
                                    };
                                    this.props.lib.updateForm(data)
                                        .then((res) => this.setState({
                                            status: ':READY:',
                                            data:res,
                                        }))
                                        .catch((reason) => console.error(':::', reason));
                                },
                            )}
                        >
                            <IconSave />&nbsp;Update
                        </Button>
                        <Button
                            variant='raised'
                            color='secondary'
                            onClick={() => this.setState(
                                { status: ':PENDING:' },
                                () => this.props.lib.deleteForm(this.state.data.id)
                                    .then((data) => this.props.onSetRouter(':HOME:'))
                                    .catch((reason) => console.error(':::', reason)),
                            )}
                        >
                            <IconDelete />&nbsp;Delete
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

                <FormControl >
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
                    Updated at:
                    </Typography>
                <Typography variant='body2'>
                    {moment.unix(this.state.data.updatedAt).format('YYYY-MM-DD HH:mm')}
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
