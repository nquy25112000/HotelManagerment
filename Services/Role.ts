import { Role } from '../Models/Role'
import { RoleRepository } from '../Repositories/Repository/Role';


const Repository = new RoleRepository();


export class RoleService {
    public findAll = async () => {
        const rs = await Repository.findAll();
        return rs;
    }

    public create = async (item: []) => {
        const rs = await Repository.create(item);
        return rs;
    }
    public update = async (id: string, item: []) => {
        const rs = await Repository.update(id, item);
        return rs;
    }
    public delete = async (id: string) => {
        const rs = await Repository.delete(id);
        return rs;
    }
    public findOne = async (id: string) => {
        const rs = await Repository.findOne(id)
        return rs;
    }
    public findItem = async (item: []) => {
        const rs = await Repository.findItem(item);
        return rs;
    }


}
