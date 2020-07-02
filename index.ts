import { Server } from './classes/server';
import bodyParser from 'body-parser';
import { demo } from './routes';
import cors from 'cors';

const server = new Server();

/* Configurations
-------------------------------------------------- */

server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );

/* Allow All conections */
server.app.use( cors({ origin: true, credentials: true }) );

/* End of Configurations
-------------------------------------------------- */


/* Routes
-------------------------------------------------- */

server.app.use('/api/demo', demo);   

/* End of Routes
-------------------------------------------------- */


server.start(() => {
    console.log('Server start');
});