import delay from './delay';

export default function (id) {
    return delay(400)
        .then(() => {
            return {
                id,
                dgs: 'DEP-110 WX',
                vac: 227,
                vdc: 14,
                notes: 'Notes ...',
                status: ':COMPLETED:',
                createdAt: 1525203589,
                updatedAt: 1525213589,
                owner: 'Owner',
            };
        });
}
