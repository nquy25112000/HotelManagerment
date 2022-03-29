import express from 'express';
import { Router } from "express";
import { HotelController } from "../Controllers/Hotel"
import bodyParser from 'body-parser';


const Controller = new HotelController();


export class HotelRouter {
    public HotelRouter: Router;

    constructor() {
        this.HotelRouter = Router();
        this.routers();
        this.config();
    }

    routers() {
        this.HotelRouter.get('/getAll', Controller.findAllRole);
        this.HotelRouter.post('/create', Controller.createRole);
    }

    public config(): void {
        this.HotelRouter.use(express.json());
        this.HotelRouter.use(bodyParser.urlencoded({ extended: true }));
    }
}