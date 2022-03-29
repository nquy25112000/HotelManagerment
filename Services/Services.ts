import { Hotel } from '../Models/Hotel'
import { ServiceRepository } from '../Repositories/Repository/Service';
import { BaseService } from './BaseService';

const Repository = new ServiceRepository();


export class ServicesService extends BaseService {
    constructor() {
        super(Repository)
    }

}
