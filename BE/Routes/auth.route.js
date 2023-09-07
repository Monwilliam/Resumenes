const { Router } = require('express')
const authController = require('../Controllers/auth.controller.js')
const authMiddleware = require('../MiddleWares/auth.middleware.js')

const authRouter = Router()
authRouter.post('/signup', authController.signup)
authRouter.post('/login', authController.login)
authRouter.get('/me', authMiddleware, authController.me)
module.exports = authRouter
