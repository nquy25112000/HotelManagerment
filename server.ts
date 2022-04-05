import express from 'express';
import session from 'express-session';
import passport from 'passport';
import jwt from 'jsonwebtoken';


import { RoleRouter } from './Router/Role';
import { UsersRouter } from './Router/Users'
import { HotelRouter } from './Router/Hotel'
import { BillRouter } from './Router/Bill'
import { BookRoomRouter } from './Router/BookRoom'
import { ServiceRouter } from './Router/Services'
import { ServiceOrdersRouter } from './Router/ServiceOrders'
import { RoomRouter } from './Router/Room'



import { Passport } from './Config/Passport'

const passportConfig = new Passport();


const roleRouter = new RoleRouter();
const usersRouter = new UsersRouter();
const holtelRouter = new HotelRouter();
const roomRouter = new RoomRouter();
const billRouter = new BillRouter();
const serviceRouter = new ServiceRouter();
const serviceOrdersRouter = new ServiceOrdersRouter();
const bookRoomRouter = new BookRoomRouter();

declare module "express-session" {
    interface SessionData {
        user: any;
        uuid: any;

    }
}

class Server {
    public app: express.Application
    PORT: number = 3000;

    constructor() {
        this.app = express();
        this.config();
        this.start();
        this.router();

    }


    public config(): void {
        this.app.use(express.json())
            .use(
                session({
                    secret: "keyboard cat",
                    resave: false,
                    saveUninitialized: true,
                    cookie: { secure: false }
                })
            )
            .use(passport.initialize())
            .use(passport.session())

    }

    public router(): void {
        this.app.use('/role', roleRouter.Router) //dùng checkAuthen
            .use('/users', usersRouter.Router)
            .use('/hotel', holtelRouter.Router)
            .use('/room', roomRouter.Router)
            .use('/bill', billRouter.Router)
            .use('/services', serviceRouter.Router)
            .use('/orders', serviceOrdersRouter.Router)
            .use('/bookroom', bookRoomRouter.Router)

            .post('/login', passportConfig.IsAuthenticate, (req, res, next) => {
                const userr = req.user?.uuid;
                const timeExpires = "1d";
                const accesToken = jwt.sign({ userr }, "alo", { expiresIn: timeExpires });
                res.json({ token: accesToken });
            })

            .get('/test', (req, res) => {
                const author = req.headers['authorization'];
                const token = author?.split(" ")[1];

            })


    }
    public start(): void {
        this.app.listen(3000, () => {

            console.log(`server running at port: ${this.PORT}`);
        });
    }
}

new Server();
