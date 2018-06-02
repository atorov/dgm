import axios from 'axios';

import delay from './delay';
import getDeepValue from './getDeepValue';

export default function (type, idToken, cfg = {}) {
    console.log('::: createForm, GET, <api>/form/{type}?{params}:');
    return delay(400)
        .then(() => {
            const url = 'https://02obl744p3.execute-api.eu-central-1.amazonaws.com/dev/form';
            const config = { 'headers': { 'Authorization': idToken } };
            switch (type) {
                case ':ALL:': return axios.get(url + '/all', config);
                case ':FILTERED:': return axios.get(url + '/filtered?filter=' + cfg.filter, config);
                case ':SINGLE:': return axios.get(url + '/single', config);
                default: return Promise.resolve({ data: { Items: [] } });
            }
        })
        .then((res) => {
            const items = getDeepValue(res, 'data.Items') || getDeepValue(res, 'data.Item') || [];
            console.log('::: res.data.Item(s):', items);
            return items;
        });
}
