import express from 'express';
import { RoleRouter } from './Router/Role';
import { UsersRouter } from './Router/Users'
import { HotelRouter } from './Router/Hotel'

import bodyParser from 'body-parser';

const roleRouter = new RoleRouter();
const usersRouter = new UsersRouter();
const holtelRouter = new HotelRouter();

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
        this.app.use(bodyParser.urlencoded({ extended: true }))
    }

    public router(): void {
        this.app.use('/role', roleRouter.RoleRouter)
        this.app.use('/users', usersRouter.UsersRouter)
        this.app.use('/hotel', holtelRouter.HotelRouter)

    }
    public start(): void {
        this.app.listen(3000, () => {
            console.log(`server running at port: ${this.PORT}`);
        });
    }
}

new Server();
