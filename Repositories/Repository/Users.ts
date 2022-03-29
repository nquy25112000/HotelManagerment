
import { Users } from '../../Models/Users'
import { KnexRepository } from '../KnexRepository'

const users = new Users();

export class UsersRepository extends KnexRepository<Users> {
    constructor() {
        super(users.tableName);
    }
}