import express from 'express';
import getHelloController from './hello';

export default function getControllers() {
    const router = express.Router();

    router.use('/hello', getHelloController());

    return router;
}
