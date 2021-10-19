import {model, Schema} from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    }
});

const CollectionName = 'User';

export const UserEntity = model(CollectionName, UserSchema, CollectionName);