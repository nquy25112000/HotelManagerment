import { UsersService } from '../Services/Users'
import { BaseController } from './BaseController';

const service = new UsersService();

export class UsersController extends BaseController{


    constructor(){
        super(service);
    }

}


