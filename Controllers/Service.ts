import { ServicesService } from '../Services/Services'
import { BaseController } from './BaseController';

const service = new ServicesService();

export class ServicesController extends BaseController {


    constructor() {
        super(service);
    }

}
