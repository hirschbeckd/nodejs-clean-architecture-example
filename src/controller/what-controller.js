import {whatService} from "../use-case/what/what-service";

export class WhatController {

    constructor(whatService) {
        this.whatService = whatService;
    }

    async getWhat() {
        return this.whatService.getWhat();
    }
}

export const whatController = new WhatController(whatService);