import delay from './delay';

export default function (facility = '') {
    return delay(400)
        .then(() => ([
            {
                id: 'sf765s7df5s7d',
                createdAt: 1525203589,
                updatedAt: null,
                dgs: 'DEP-110 W',
                status: ':COMPLETED:',
            },
            {
                id: '7sd6f5as76df5s',
                createdAt: 1525203589,
                updatedAt: 1525203589,
                dgs: 'DEP-215 L',
                status: ':COMPLETED:',
            },
            {
                id: 's7df560sdf822',
                createdAt: 1525203589,
                updatedAt: 1525203589,
                dgs: 'DEP-110 W',
                status: ':IN_PROGRESS:',
            },
        ]));
}
