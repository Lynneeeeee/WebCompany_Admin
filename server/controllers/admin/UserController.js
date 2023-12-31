const UserService = require("../../services/admin/UserService")
const JWT = require("../../util/JWT")

const UserController = {
    login:async(req, res) => {
        // req.body: username & pswd
        // console.log(req.body)
        var result = await UserService.login(req.body) // Database operation: find
        if(result.length === 0){
            res.send({
                code: "-1",
                error: "Username & Password don't match!"
            })
        } else {
            // generate token
            const token = JWT.generate({
                _id: result[0]._id,
                username: result[0].username,
            }, "10s")
            // write token into header
            res.header("Authorization", token)
            res.send({
                ActionType: "OK",
                data: {
                    username: result[0].username,
                    // password: String,
                    gender: result[0].gender?result[0].gender:0, // 0: none, 1, 2
                    intro: result[0].intro, // profile introduction
                    avatar: result[0].avatar,
                    role: result[0].role, // Manager1, editor2, ...
                }
            })
        }
    }
}

module.exports = UserController