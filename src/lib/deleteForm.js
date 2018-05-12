import delay from './delay';

export default function (id) {
    return delay(400)
        .then(() => {
            console.log('::: Deleted:', id);
        });
}
