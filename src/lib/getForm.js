import axios from 'axios';

import delay from './delay';
import getDeepValue from './getDeepValue';

export default function (type, cfg) {
    console.log('::: createForm, GET, <api>/form/{type}?{params}:');
    return delay(400)
        .then(() => {
            const url = 'https://02obl744p3.execute-api.eu-central-1.amazonaws.com/dev/form';
            switch (type) {
                case ':ALL:': return axios.get(url + '/all');
                case ':FILTERED:': return axios.get(url + '/filtered');
                case ':SINGLE:': return axios.get(url + '/single');
                default: return Promise.resolve({ data: [] });
            }
        })
        .then((res) => {
            const items = getDeepValue(res, 'data.Items') || getDeepValue(res, 'data.Item') || [];
            console.log('::: res.data.Item(s):', items);
            return items;
        });
}
