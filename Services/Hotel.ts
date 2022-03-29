import { HotelRepository } from '../Repositories/Repository/Hotel';
import { BaseService } from './BaseService';

const Repository = new HotelRepository();


export class HotelService extends BaseService {
    constructor() {
        super(Repository);
    }

}
