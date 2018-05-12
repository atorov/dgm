import axios from 'axios';

import delay from './delay';

export default function (form) {
    console.log('::: createForm:');
    return delay(400)
        .then(() => axios.post(
            'https://02obl744p3.execute-api.eu-central-1.amazonaws.com/dev/form',
            form,
        ))
        .then((res) => {
            console.log('::: res:', res);
            return {
                ...res.data,
                id: 'hhjasda43-asdase-234',
            };
        });
}
