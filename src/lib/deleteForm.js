import axios from 'axios';

import delay from './delay';

export default function (id, idToken) {
    console.log('::: deleteForm, DELETE, { data: { id } }, <api>/form:');
    const url = 'https://02obl744p3.execute-api.eu-central-1.amazonaws.com/dev/form';
    const config = {
        data: { id },
        headers: { 'Authorization': idToken },
    };

    return delay(400)
        .then(() => axios.delete(url, config))
        .then((res) => {
            console.log('::: res.data:', res.data);
            return res.data;
        });
}
