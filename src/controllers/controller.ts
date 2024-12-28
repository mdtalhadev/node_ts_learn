import {Request,Response} from "express";

export const HomeControllers = (req:Request, res:Response)=>{
    res.json({
        message: 'Hello World',
        status: 'success',
    });
}

