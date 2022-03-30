import express from 'express';

import { RoleRouter } from './Router/Role';
import { UsersRouter } from './Router/Users'
import { HotelRouter } from './Router/Hotel'
import { BillRouter } from './Router/Bill'
import { BookRoomRouter } from './Router/BookRoom'
import { ServiceRouter } from './Router/Services'
import { ServiceOrdersRouter } from './Router/ServiceOrders'
import { RoomRouter } from './Router/Room'




const roleRouter = new RoleRouter();
const usersRouter = new UsersRouter();
const holtelRouter = new HotelRouter();
const roomRouter = new RoomRouter();
const billRouter = new BillRouter();
const serviceRouter = new ServiceRouter();
const serviceOrdersRouter = new ServiceOrdersRouter();
const bookRoomRouter = new BookRoomRouter();




class Server {
    public app: express.Application
    PORT: number = 3000;

    constructor() {
        this.app = express();
        this.config();
        this.router();
        this.start();
    }


    public config(): void {
        this.app.use(express.json())

    }

    public router(): void {
        this.app.use('/role', roleRouter.Router)
        this.app.use('/users', usersRouter.Router)
        this.app.use('/hotel', holtelRouter.Router)
        this.app.use('/room', roomRouter.Router)
        this.app.use('/bill', billRouter.Router)
        this.app.use('/services', serviceRouter.Router)
        this.app.use('/orders', serviceOrdersRouter.Router)
        this.app.use('/bookroom', bookRoomRouter.Router)


    }
    public start(): void {
        this.app.listen(3000, () => {

            console.log(`server running at port: ${this.PORT}`);
        });
    }
}

new Server();
