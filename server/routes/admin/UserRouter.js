const UserController = require('../../controllers/admin/UserController')

var express = require('express');
var UserRouter = express.Router();

/* All login request from adminapi passed into controller */
UserRouter.post("/adminapi/user/login",UserController.login)


module.exports = UserRouter;