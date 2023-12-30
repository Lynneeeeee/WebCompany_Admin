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
                ActionType: "OK"
            })
        }
    }
}

module.exports = UserController