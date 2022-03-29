import { BookRoomRepository } from '../Repositories/Repository/BookRoom';
import { BaseService } from './BaseService';

const Repository = new BookRoomRepository();


export class BookRoomService extends BaseService {
    constructor() {
        super(Repository);
    }

}
