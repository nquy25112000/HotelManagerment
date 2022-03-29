import { RoomRepository } from '../Repositories/Repository/Room';
import { BaseService } from './BaseService';

const Repository = new RoomRepository();


export class RoomService extends BaseService {
    constructor() {
        super(Repository);
    }

}
