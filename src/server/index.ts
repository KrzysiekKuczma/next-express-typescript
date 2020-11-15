import express from 'express';
import next from 'next';
import bodyParser from 'body-parser';
import { errorHandler } from './middleware';
import getControllers from './controllers';

const isDevEnv = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev: isDevEnv });
const handleRequest = app.getRequestHandler();
const server = express();

app.prepare()
    .then(() => {
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: true }));

        server.use('/api', getControllers());
        server.use(errorHandler);

        server.all('*', (req, res) => {
            return handleRequest(req, res);
        });

        server.listen(port, () => {
            console.log(`Application listen on port: ${port}`);
        });
    })
    .catch((err: any) => {
        console.log(err);
    });
