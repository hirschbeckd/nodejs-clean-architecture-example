import {model, Schema} from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    }
});

export const UserEntity = model("User", UserSchema);