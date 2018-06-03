import axios from 'axios';

import delay from './delay';
import getDeepValue from './getDeepValue';

export default function (filter, idToken, id) {
    console.log('::: createForm, GET, <api>/form/{type}?{params}:');
    const url = 'https://02obl744p3.execute-api.eu-central-1.amazonaws.com/dev/form';
    const config = { 'headers': { 'Authorization': idToken } };

    return delay(400)
        .then(() => {
            if (!filter) return axios.get(url + '/single?filter=' + id, config);
            return axios.get(url + '/filtered?filter=' + filter, config);
        })
        .then((res) => {
            const items = getDeepValue(res, 'data.Items') || getDeepValue(res, 'data.Item') || [];
            console.log('::: res.data.Item(s):', items);
            return items;
        });
}
