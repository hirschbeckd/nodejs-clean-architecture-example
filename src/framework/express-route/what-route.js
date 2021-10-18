import {AbstractRoute} from './abstract-route';
import {whatController} from "../../controller/what-controller";

export class WhatRoute extends AbstractRoute {

    constructor() {
        super();
    }

    mapRoutes(app) {
        app.get('/what', async (req, res) => res.json(await whatController.getWhat()));
    }
}