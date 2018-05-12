import React from 'react';

import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
// import { LinearProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';

// SVG icons
import IconCancel from '@material-ui/icons/Cancel';

const Recharts = require('recharts');
const {
    Cell,
    Legend,
    Pie,
    PieChart,
    Tooltip
} = Recharts;

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: '',
            data: [],
        };
    }

    componentDidMount () {
        this.props.lib.getReport()
            .then((data) => {
                this.setState({
                    status: ':READY:',
                    data,
                });
            })
            .catch((reason) =>console.error(':::', reason));
    }

    render() {
        // if (this.state.status !== ':READY:') return <LinearProgress />;

        return (
            <div>
                <div style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Typography variant='title'>
                        Report
                    </Typography>
                    <div>
                        <Button
                            onClick={() => this.props.onSetRouter(':HOME:')}
                            style={{ marginRight: this.props.theme.spacing.unit + 'px' }}
                        >
                            <IconCancel />&nbsp;Cancel
                        </Button>
                    </div>
                </div>
                <br /><Divider /><br />

                <PieChart width={580} height={400}>
                    <Pie
                        data={this.state.data}
                        nameKey='name'
                        dataKey='value'
                        cx={290}
                        cy={175}
                        innerRadius={75}
                        outerRadius={150}
                        fill='#82ca9d'
                        label
                    >
                        <Cell fill='#00c49f' />
                        <Cell fill='#0088fe' />
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>

                <br /><Divider /><br />
            </div>
        );
    }
}
