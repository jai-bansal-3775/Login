import express from 'express'
const router = express.Router()
import UserControllers from '../Controllers/userController.js'

router.get('/',UserControllers.home)
router.get('/registration',UserControllers.registration)
router.post('/registration',UserControllers.createUser)
router.get('/login',UserControllers.login)
router.post('/login',UserControllers.verifyLogin)

export default router