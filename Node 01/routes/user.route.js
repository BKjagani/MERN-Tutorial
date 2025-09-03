import express from 'express'
import { postUser, getUser } from '../controllers/user.controller.js'

const router = express.Router()

router.post("/postuser", postUser)

router.get('/getuser', getUser)


export default router;