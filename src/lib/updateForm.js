import delay from './delay';

export default function (form) {
    return delay(400)
        .then(() => {
            return form;
        });
}
