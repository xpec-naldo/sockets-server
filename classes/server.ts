import express from 'express';
import { SERVER_PORT } from '../globals/environment';

export class Server{
    public app:express.Application;
    public port:Number;

    constructor(){
        this.app = express();
        this.port = SERVER_PORT;    
    }

    start(callback:VoidFunction){
        this.app.listen(this.port, callback)
    }

}