import { BillService } from '../Services/Bill'
import { BaseController } from './BaseController';

const service = new BillService();

export class BillController extends BaseController {
    constructor() {
        super(service);
    }

}
