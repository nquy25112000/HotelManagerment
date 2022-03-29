

export abstract class BaseService {
    Repository: any;
    constructor(repo: any ) {
        this.Repository = repo;

    }
    public findAll = async () => {
        const rs = await this.Repository.findAll();
        return rs;
    }

    public create = async (item: []) => {
        const rs = await this.Repository.create(item);
        return rs;
    }
    public update = async (id: string, item: []) => {
        const rs = await this.Repository.update(id, item);
        return rs;
    }
    public delete = async (id: string) => {
        const rs = await this.Repository.delete(id);
        return rs;
    }
    public findOne = async (id: string) => {
        const rs = await this.Repository.findOne(id)
        return rs;
    }
    public findItem = async (item: []) => {
        const rs = await this.Repository.findItem(item);
        return rs;
    }


}