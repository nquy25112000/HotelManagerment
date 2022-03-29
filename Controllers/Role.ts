import { RoleService } from '../Services/Role'
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

const service = new RoleService();

export class RoleController {


    public findAllRole = async (req: Request, res: Response, next: NextFunction) => {
        const result = await service.getRoles();
        res.status(200).json(result)
    }

    public createRole = async (req: Request, res: Response, next: NextFunction) => {
        const item = req.body
        item.id = uuidv4();
        await service.createRoles(item);
        res.status(201).json({ messager: "sucsess" })
    }

}


