import React from 'react';

import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input from 'material-ui/Input';
import { LinearProgress } from 'material-ui/Progress';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import Typography from 'material-ui/Typography';

// SVG icons
import IconCancel from '@material-ui/icons/Cancel';
import IconDelete from '@material-ui/icons/DeleteForever';
import IconSave from '@material-ui/icons/Save';

export default class extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            status: '',
            facilities: [],
            data: {
                facility: {
                    id: '',
                    name: '',
                    genType: ''
                },
            },
        };
    }

    componentDidMount () {
        this.props.lib.getFacilities()
            .then((facilities) => {
                this.setState({
                    status: ':READY:',
                    facilities,
                });
            })
            .catch((reason) =>{
                console.error(':::', reason);
            });
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
                    <div style={{ minWidth: '350px' }}>
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
                            onClick={() => {}}
                        >
                            <IconSave />&nbsp;Save
                        </Button>
                        <Button
                            variant='raised'
                            color='secondary'
                            onClick={() => {}}
                        >
                            <IconDelete />&nbsp;Delete
                        </Button>
                    </div>
                </div>
                <br /><Divider /><br />

                <FormControl fullWidth>
                    <Select
                        value={this.state.data.facility.id}
                        input={<Input name='facility' />}
                        onChange={(event) => this.setState({
                            data: {
                                ...this.state.data,
                                facility: this.state.facilities.find((item) => item.id === event.target.value),
                            },
                        })}
                    >
                        {this.state.facilities.map((item) => (
                            <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>Facility</FormHelperText>
                </FormControl><br /><br />

                <FormControl fullWidth>
                    <Input
                        name='gen-type'
                        value={this.state.data.facility.genType || ''}
                        disabled
                    />
                    <FormHelperText>Type</FormHelperText>
                </FormControl><br /><br />
                <br /><Divider /><br />
            </div>
        );
    }
}
