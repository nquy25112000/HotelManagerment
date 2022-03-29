import { BillRepository } from '../Repositories/Repository/Bill';
import { BaseService } from './BaseService';

const Repository = new BillRepository();


export class BillService extends BaseService {
    constructor() {
        super(Repository);
    }

}
