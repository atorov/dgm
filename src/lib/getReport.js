import axios from 'axios';

import delay from './delay';

export default function (idToken) {
    console.log('::: getReport, GET, <api>/health:');
    const url = 'https://02obl744p3.execute-api.eu-central-1.amazonaws.com/dev/report';
    const config = { 'headers': { 'Authorization': idToken } };

    return delay(400)
        .then(() => axios.get(url, config))
        .then((res) => {
            console.log('::: res.data:', res.data);
            return res.data;
        });
}
