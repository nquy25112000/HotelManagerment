import { UsersRepository } from '../Repositories/Repository/Users';
import { BaseService } from './BaseService';

const Repository = new UsersRepository();


export class UsersService extends BaseService {
    constructor() {
        super(Repository);
    }

}
