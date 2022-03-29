import { ServiceOrdersService } from '../Services/ServiceOrders'
import { BaseController } from './BaseController';

const service = new ServiceOrdersService();

export class ServiceOrdersController extends BaseController {
    constructor() {
        super(service);
    }

}
