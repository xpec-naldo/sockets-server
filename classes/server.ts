import express from 'express';
import { SERVER_PORT } from '../globals/environment';
import  socketIO  from 'socket.io';
import http from 'http';

export class Server{

    private static _intance: Server;

    public app: express.Application;
    public port: Number;
    public io: SocketIO.Server;
    private htttpServer: http.Server;

    private constructor(){
        this.app = express();
        this.port = SERVER_PORT;

        this.htttpServer = new http.Server( this.app );
        this.io = socketIO( this.htttpServer );

        this.listenSocket();
    }

    public static get instance(){
        return this._intance || ( this._intance = new this() );
    }

    listenSocket(){
        console.log('Connected to socket');
        this.io.on('connection', client => {
            console.log('Connected');
        });

    }

    start(callback:VoidFunction){
        this.app.listen(this.port, callback)
    }

}