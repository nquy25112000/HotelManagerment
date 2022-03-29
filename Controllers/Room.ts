import { RoomService } from '../Services/Room'
import { BaseController } from './BaseController';

const service = new RoomService();

export class RoomController extends BaseController{


    constructor(){
        super(service);
    }

}
