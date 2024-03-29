import {UserEntity} from "../entity/user-entity";

export class UserRepository {

    constructor(UserEntity) {
        this.UserEntity = UserEntity;
    }

    async findAll() {
        return await this.UserEntity.find()
    }

    async save(user) {
        await this.UserEntity.create({name: user});
    }
}

export const userRepository = new UserRepository(UserEntity);