import { Role } from '../Models/Role'
import { RoleRepository } from '../Repositories/Repository/Role';
import { BaseService } from './BaseService';

const Repository = new RoleRepository();


export class RoleService extends BaseService {
    constructor() {
        super(Repository);
    }

}
