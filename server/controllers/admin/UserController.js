const UserService = require("../../services/admin/UserService")

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
            res.send({
                ActionType: "OK"
            })
        }
        //
    }
}

module.exports = UserController