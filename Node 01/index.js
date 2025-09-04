import express from 'express'
const app = express()
import userRouter from "./routes/user.route.js"
import connectDB from './config/db.js'
import productRoutes from './routes/product.route.js'
import cors from 'cors'
connectDB()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello")
})


app.use("/api", userRouter)
app.use('/api', productRoutes)

app.listen(3000, () => {
    console.log("http://localhost:3000")
})