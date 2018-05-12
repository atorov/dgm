import delay from './delay';

export default function (id) {
    console.log('::: getReport:');
    return delay(400)
        .then((res) => {
            console.log('::: data:', res);
            return [
                { name: 'Completed', value: 8 },
                { name: 'In Progress', value: 14 },
            ];
        });
}
