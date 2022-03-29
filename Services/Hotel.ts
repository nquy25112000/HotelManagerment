import { Hotel } from '../Models/Hotel'
import { HotelRepository } from '../Repositories/Repository/Hotel';

const Repository = new HotelRepository();


export class HotelService {
    constructor() {
    }

    public getHotel = async () => {
        const rs = await Repository.findAll();
        return rs;
    }

    public createHotel = async (item: Hotel[]) => {
        const rs = await Repository.create(item);
        return rs;
    }

}
