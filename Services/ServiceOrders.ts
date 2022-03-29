import { ServiceOrdersRepository } from '../Repositories/Repository/ServiceOrders';
import { BaseService } from './BaseService';

const Repository = new ServiceOrdersRepository();


export class ServiceOrdersService extends BaseService {
    constructor() {
        super(Repository);
    }

}
