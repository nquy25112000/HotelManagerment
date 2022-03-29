import { UsersService } from '../Services/Users'
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

const service = new UsersService();

export class UsersController {


    public findAllRole = async (req: Request, res: Response, next: NextFunction) => {
        const result = await service.getRoles();
        res.status(200).json(result)
    }

    public createRole = async (req: Request, res: Response, next: NextFunction) => {
        const item = req.body
        item.id = uuidv4();
        const roleId = item.roleId;
        const hotelId = item.hotelId;
        if (roleId == '' || hotelId == '') {
            res.status(200).json("Thiếu dữ liệu")
        }
        await service.createRoles(item);
        res.status(201).json({ messager: "sucsess" })
    }

}


