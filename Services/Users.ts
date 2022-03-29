import { Users } from '../Models/Users'
import { UsersRepository } from '../Repositories/Repository/Users';

const Repository = new UsersRepository();


export class UsersService {
    constructor() {
    }

    public getRoles = async () => {
        const rs = await Repository.findAll();
        return rs;
    }

    public createRoles = async (item: Users[]) => {
        const rs = await Repository.create(item);
        return rs;
    }

}
