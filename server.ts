import { join } from 'path';
import { writeFile } from 'fs';

import * as compression from 'compression';
import * as express from 'express';
import * as cors from 'cors';

import { EmbedConfig } from './src/embed.config';

// Express server
const server = express();
server.use(cors());
server.use(compression());

const router = express.Router();

const HOST = process.env.HOST || 'localhost';
const PORT = Number(process.env.PORT) || 4200;
const BASE_HREF = process.env.BASE_HREF || '/';

const SERVICE_URL = process.env.SERVICE_URL || 'http://localhost:9000';
const UI_URL = process.env.UI_URL || 'http://localhost:3000';
const VIVO_URL = process.env.VIVO_URL || 'https://scholars.library.tamu.edu/vivo';

const embedConfig: EmbedConfig = {
    serviceUrl: SERVICE_URL,
    uiUrl: UI_URL,
    vivoUrl: VIVO_URL
};

const DIST_FOLDER = join(process.cwd(), 'dist');

writeFile('./dist/embedConfig.json', JSON.stringify(embedConfig), (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Static runtime embed config created:');
        console.log(embedConfig);
    }
});

router.get('*.*', express.static(DIST_FOLDER, {
    maxAge: '1y'
}));

server.use(BASE_HREF, router);

server.listen(PORT, () => {
    console.log(`Node Express server listening on http://${HOST}:${PORT}${BASE_HREF}`);
});
