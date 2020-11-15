import express from 'express';

const dummyList = [
    {
        id: 1,
        name: 'My first list item',
        description: 'Event from express server.',
    },
    {
        id: 2,
        name: 'My second list item',
        description: 'Event from express server.',
    },
    {
        id: 3,
        name: 'My third list item',
        description: 'Event from express server.',
    },
];

export default function getHelloController() {
    const router = express.Router();

    router.get('/', (_req, res) => {
        // console.log(req);
        res.send('Hello from API');
    });

    router.get('/list', (_req, res) => {
        res.send(dummyList);
    });

    return router;
}
