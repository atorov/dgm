import axios from 'axios';

import delay from './delay';

export default function (id) {
    console.log('::: getReport, GET, <api>/health:');
    return delay(400)
        .then(() => axios.get('https://02obl744p3.execute-api.eu-central-1.amazonaws.com/dev/report'))
        .then((res) => {
            console.log('::: res.data:', res.data);
            return res.data;
        });
}
