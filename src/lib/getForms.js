import delay from './delay';

export default function (filter = '') {
    console.log('::: getForms:');
    return delay(400)
        .then((data) => {
            console.log('::: data:', data);
            return [
                {
                    id: 'sf765s7df5s7d',
                    createdAt: 1525105689,
                    updatedAt: 1525135689,
                    dgs: 'DEP-110 W',
                    status: ':COMPLETED:',
                },
                {
                    id: '7sd6f5as76df5s',
                    createdAt: 1525202589,
                    updatedAt: 1525218589,
                    dgs: 'DEP-215 L',
                    status: ':COMPLETED:',
                },
                {
                    id: 's7df560sdf822',
                    createdAt: 1525223589,
                    updatedAt: 1525236589,
                    dgs: 'DEP-110 W',
                    status: ':IN_PROGRESS:',
                },
            ];
        });
}
