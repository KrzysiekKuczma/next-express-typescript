import { ErrorRequestHandler } from 'express';
import winston from 'winston';

export const errorHandler: ErrorRequestHandler = (error, _req, res, next) => {
    if (res.headersSent) {
        next(error);
    } else {
        winston.error(error);
        res.status(500);
        res.json({
            message: error,
        });
    }
};
