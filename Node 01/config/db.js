
import mongoose from 'mongoose'

export default async function connectDB(){
    try {
        await mongoose.connect("mongodb://localhost:27017/node01")
        console.log("DB Connected")
    } catch (error) {
        console.log(error)
    }
}


