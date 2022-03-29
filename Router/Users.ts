import express from 'express';
import { Router } from "express";
import { UsersController } from "../Controllers/Users"
import bodyParser from 'body-parser';


const Controller = new UsersController();


export class UsersRouter {
    public UsersRouter: Router;

    constructor() {
        this.UsersRouter = Router();
        this.routers();
        this.config();
    }

    routers() {
        this.UsersRouter.get('/getAll', Controller.findAllRole);
        this.UsersRouter.post('/create', Controller.createRole);
    }

    public config(): void {
        this.UsersRouter.use(express.json());
        this.UsersRouter.use(bodyParser.urlencoded({ extended: true }));
    }
}