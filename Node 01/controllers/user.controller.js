import User from "../models/user.model.js";

export const postUser = async (req, res) => {
    const {username, email} = req.body
    await User.create({username, email})
    res.send("User Created successfully")
}


