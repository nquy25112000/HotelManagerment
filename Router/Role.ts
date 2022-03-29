import express from 'express';
import { Router } from "express";
import { RoleController } from "../Controllers/Role"
import bodyParser from 'body-parser';


const Controller = new RoleController();


export class RoleRouter {
    public RoleRouter: Router;

    constructor() {
        this.RoleRouter = Router();
        this.routers();
        this.config();
    }

    routers() {
        this.RoleRouter.get('/getAll', Controller.findAllRole);
        this.RoleRouter.post('/create', Controller.createRole);
    }

    public config(): void {
        this.RoleRouter.use(express.json());
        this.RoleRouter.use(bodyParser.urlencoded({ extended: true }));
    }
}