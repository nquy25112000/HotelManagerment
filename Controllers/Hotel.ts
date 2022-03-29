import { HotelService } from '../Services/Hotel'
import { BaseController } from './BaseController';

const service = new HotelService();


export class HotelController extends BaseController {

    constructor() {
        super(service);
    }

}


