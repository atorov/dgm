import axios from 'axios';

import delay from './delay';

export default function (id) {
    console.log('::: getAPIHealth(), GET:');
    return delay(400)
        .then(() => axios.get('https://02obl744p3.execute-api.eu-central-1.amazonaws.com/dev/health'))
        .then((res) => {
            console.log('::: res:', res);
            return res;
        });
}
