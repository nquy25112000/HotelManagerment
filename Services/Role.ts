import { Role } from '../Models/Role'
import { RoleRepository } from '../Repositories/Repository/Role';

const Repository = new RoleRepository();


export class RoleService {
    constructor() {
    }

    public getRoles = async () => {
        const rs = await Repository.findAll();
        return rs;
    }

    public createRoles = async (item: Role[]) => {
        const rs = await Repository.create(item);
        return rs;
    }
}
