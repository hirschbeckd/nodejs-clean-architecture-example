import {UserEntity} from "../entity/user-entity";

export class UserRepository {

    constructor(UserEntity) {
        this.UserEntity = UserEntity;
    }

    async findAll() {
        return await this.UserEntity.find()
    }

    async save(user) {
        const newUserEntity = new this.UserEntity({name: user});
        newUserEntity.save();
    }
}

export const userRepository = new UserRepository(UserEntity);