import React from 'react';
import moment from 'moment';

import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input from 'material-ui/Input';
import { LinearProgress } from 'material-ui/Progress';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';

// SVG icons
import IconAdd from '@material-ui/icons/Add';
import IconFile from '@material-ui/icons/InsertDriveFile';
import IconInsertDriveFile from '@material-ui/icons/InsertDriveFile';
import IconSwapHoriz from '@material-ui/icons/SwapHoriz';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: '',
            forms: [],
            filter: ':ALL:',
        };
    }

    componentDidMount () {
        this.props.lib.getForm(this.state.filter, this.props.appState.auth.idToken)
            .then((forms) => {
                this.setState({
                    status: ':READY:',
                    forms,
                });
            })
            .catch((reason) =>  console.error(':::', reason));
    }

    render () {
        if (this.state.status !== ':READY:') return <LinearProgress />;

        return (
            <div>
                <div style={{
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <FormControl component='div'>
                        <Select
                            value={this.state.filter}
                            input={<Input name='filter' />}
                            autoWidth
                            onChange={(event) => this.setState(
                                {
                                    status: ':LOADING:',
                                    filter: event.target.value,
                                },
                                () => this.props.lib.getForm(this.state.filter, this.props.appState.auth.idToken)
                                    .then((forms) => this.setState({ status: ':READY:', forms }))
                                    .catch((reason) =>  console.error(':::', reason)),
                            )}
                        >
                            <MenuItem value=':ALL:'><em>All</em></MenuItem>
                            <MenuItem value=':COMPLETED:'>Completed</MenuItem>
                            <MenuItem value=':IN_PROGRESS:'>In progress</MenuItem>
                        </Select>
                        <FormHelperText>Filter by status</FormHelperText>
                    </FormControl>
                    <div>
                        <Button
                            variant='raised'
                            color='primary'
                            style={{ marginRight: this.props.theme.spacing.unit + 'px' }}
                            onClick={() => this.props.onSetRouter(':FORM:ADD_NEW:')}
                        >
                            <IconAdd /> Add New
                        </Button>
                        <Button
                            variant='raised'
                            color='primary'
                            style={{ marginRight: this.props.theme.spacing.unit + 'px' }}
                            onClick={() => this.props.onSetRouter(':REPORT:')}
                        >
                            <IconInsertDriveFile /> Report
                        </Button>
                        <Button
                            variant='raised'
                            color='primary'
                            onClick={() => this.props.onSetRouter(':API:HEALTH:')}
                        >
                            <IconSwapHoriz /> API Health
                        </Button>
                    </div>
                </div>
                <br /><Divider /><br />

                <List>
                    {this.state.forms.map((form) => {
                        const id = this.props.lib.getDeepValue(form, 'id.S');
                        const status = this.props.lib.getDeepValue(form, 'status.S');
                        const dgs = this.props.lib.getDeepValue(form, 'dgs.S');
                        const createdAt = +this.props.lib.getDeepValue(form, 'createdAt.N');
                        const updatedAt = +this.props.lib.getDeepValue(form, 'updatedAt.N');

                        return (
                            <ListItem
                                key={id}
                                button
                                onClick={() => this.props.onSetRouter(':FORM:EDIT:', { id })}
                            >
                                <Avatar>
                                    <IconFile color={status === ':COMPLETED:' ? 'primary' : 'secondary'}/>
                                </Avatar>
                                <ListItemText
                                    primary={dgs}
                                    secondary={`Created at: ${moment.unix(createdAt).format('YYYY-MM-DD HH:mm')}, Updated at: ${moment.unix(updatedAt).format('YYYY-MM-DD HH:mm')}`}
                                />
                            </ListItem>
                        );
                    })}
                </List>
                <br /><Divider /><br />
            </div>
        );
    }
}
