import express from 'express'
import { postUser, getUser, deleteUser, updateUser } from '../controllers/user.controller.js'

const router = express.Router()

router.post("/postuser", postUser)

router.get('/getuser', getUser)

router.delete('/deleteuser/:id', deleteUser)

router.put('/updateuser/:id', updateUser)

export default router;