
import { Router, Request, Response } from 'express';
import { HttpRes } from '../classes/httprest';

const router:Router = Router();
const httpRes:HttpRes = new HttpRes();


router.get('/', (req:Request, res:Response) => {
    res.status(httpRes.status.ok).send({
        msg: true
    });
});

router.post('/', (req, res) => {
    // const body = req.body.body
});

router.put('/:id', (req, res) => {
    //const id = req.params.id;
});

router.delete('/:id', (req, res) => {

});

router.get('/items', (req, res) => {

});



export { router };