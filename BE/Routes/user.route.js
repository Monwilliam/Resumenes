const { Router } = require('express')
const userController = require('../Controllers/user.controller.js')

const userRouter = Router()
userRouter.get('/', userController.user)

module.exports = userRouter
// module.exports= userRouter
