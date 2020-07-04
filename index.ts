import { Server } from './classes/server';
import bodyParser from 'body-parser';
import { demo } from './routes';
import cors from 'cors';

const server = Server.instance; 

/* Configurations
-------------------------------------------------- */

server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );


/* Allow All conections */
server.app.use( cors({ origin: true, credentials: true  }) );

/* End of Configurations
-------------------------------------------------- */


/* Routes
-------------------------------------------------- */

server.app.use('/', demo);   

/* End of Routes
-------------------------------------------------- */


server.start(() => {
    console.log('Server start');
});