import axios from 'axios';

import delay from './delay';

export default function (id) {
    console.log('::: deleteForm, DELETE, { data: { id } }, <api>/form:');
    return delay(400)
        .then(() => axios.delete(
            'https://02obl744p3.execute-api.eu-central-1.amazonaws.com/dev/form',
            { data: { id } },
        ))
        .then((res) => {
            console.log('::: res.data:', res.data);
            return res.data;
        });
}
