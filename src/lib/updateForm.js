import axios from 'axios';

import delay from './delay';

export default function (form, idToken) {
    console.log('::: updateForm, PUT, { form }, <api>/form:');
    const url = 'https://02obl744p3.execute-api.eu-central-1.amazonaws.com/dev/form';
    const config = { 'headers': { 'Authorization': idToken } };

    return delay(400)
        .then(() => axios.put(url, form, config))
        .then((res) => {
            console.log('::: res.data:', res.data);
            return res.data;
        });
}
