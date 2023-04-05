import {listUsersService} from "../use-case/user/list-users-service";
import {addUserService} from "../use-case/user/add-user-service";

export class UsersController {

    constructor(listUsersService, addUserService) {
        this.listUsersService = listUsersService;
        this.addUserService = addUserService;
    }

    async listUsers() {
        return await this.listUsersService.listUsers();
    }

    async addUser(user) {
        await this.addUserService.save(user)
    }

}

export const userController = new UsersController(listUsersService, addUserService);