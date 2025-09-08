import User from "../models/user.model.js";

export const postUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    if (!username && !email) {
      return res.status(400).json({ message: "Please provide data" });
    }
    const user = await User.create({ username, email });
    return res.status(201).json({ message: "User Created successfully", user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({ message: "Users get successfully", users });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    return res.status(200).json({ message: "User deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const updateUser = async (req, res) => {
  try {
        const {id} = req.params;
        const {username, email} = req.body;
        await User.findByIdAndUpdate(id, {username, email})
        res.status(200).json({message : "User updated"})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
