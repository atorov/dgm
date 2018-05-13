import axios from 'axios';

import delay from './delay';

export default function (form) {
    console.log('::: createForm, POST, { form }, <api>/form:');
    return delay(400)
        .then(() => axios.post(
            'https://02obl744p3.execute-api.eu-central-1.amazonaws.com/dev/form',
            form,
        ))
        .then((res) => {
            console.log('::: res.data:', res.data);
            return res.data;
        });
}
