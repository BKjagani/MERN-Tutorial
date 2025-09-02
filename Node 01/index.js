import express from 'express'
import mongoose from 'mongoose'
import { postUser } from './controllers/user.controller.js'
const app = express()


app.use(express.json())

async function connectDB(){
    try {
        await mongoose.connect("mongodb://localhost:27017/node01")
        console.log("DB Connected")
    } catch (error) {
        console.log(error)
    }
}

connectDB()


app.get("/", (req, res) => {
    res.send("Hello")
})

app.post("/api/postuser", postUser)

app.listen(3000, () => {
    console.log("http://localhost:3000")
})