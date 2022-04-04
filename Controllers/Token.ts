import { Token } from "../Services/Token";
import { Request, Response, NextFunction } from 'express';
const service = new Token();

declare module "express-session" {
    interface SessionData {
        user: any;
        uuid: any;

    }
}

export class TokenController {
    public createToken = async (req: Request, res: Response, next: NextFunction) => {
        //const createToken = await service.createToken(req.user?.uuid)
        const userr = req.user?.uuid;
        res.json(userr)
    }
}