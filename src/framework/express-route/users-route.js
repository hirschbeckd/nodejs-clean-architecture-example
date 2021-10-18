import {AbstractRoute} from './abstract-route';
import {userController} from "../../controller/user-controller";

export class UsersRoute extends AbstractRoute {

    constructor() {
        super();
    }

    mapRoute(app) {
        app.get('/users', async (req, res) => res.json(await userController.listUsers()));
        app.post('/users/:user', async (req, res) => res.json(await userController.addUser(req.params.user)));
    }

}
