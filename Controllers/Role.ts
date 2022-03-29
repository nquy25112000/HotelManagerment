import { RoleService } from '../Services/Role'
import { BaseController } from './BaseController';


const service = new RoleService();

export class RoleController extends BaseController{

    
    constructor(){
        super(service);
    }

}


