const mongoose = require("mongoose")

// user model => users collection
const Schema = mongoose.Schema

const UserType = {
    username: String,
    password: String,
    gender: Number, // 0, 1, 2
    intro: String, // profile introduction
    avatar: String,
    role: Number, // Manager1, editor2, ...
}
const UserModel = mongoose.model("user", new Schema(UserType))

module.exports = UserModel