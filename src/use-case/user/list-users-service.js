import {userRepository} from "../../repository/user-repository";

export class ListUsersService {

    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async listUsers() {
        return await this.userRepository.findAll();
    }
}

export const listUsersService = new ListUsersService(userRepository);