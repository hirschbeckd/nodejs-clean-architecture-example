export class WhatService {

    async getWhat() {
        return {
            message: "Whats Up?"
        }
    }
}

export const whatService = new WhatService();