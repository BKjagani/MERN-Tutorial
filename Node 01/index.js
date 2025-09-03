import express from 'express'
const app = express()
import userRouter from "./routes/user.route.js"
import connectDB from './config/db.js'

connectDB()
app.use(express.json())


app.get("/", (req, res) => {
    res.send("Hello")
})


app.use("/api", userRouter)


app.listen(3000, () => {
    console.log("http://localhost:3000")
})