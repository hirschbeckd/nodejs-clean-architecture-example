import {userRepository} from "../../repository/user-repository";

export class AddUserService {

    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async save(user) {
        await this.userRepository.save(user);
    }
}

export const addUserService = new AddUserService(userRepository);