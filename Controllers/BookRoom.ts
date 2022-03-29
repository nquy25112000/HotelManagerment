import { BookRoomService } from '../Services/BookRoom'
import { BaseController } from './BaseController';

const service = new BookRoomService();

export class BookRoomController extends BaseController {

    constructor() {
        super(service);
    }

}
