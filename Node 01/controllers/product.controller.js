import Product from "../models/product.model.js";

export const postProduct = async (req, res) => {
    try {
        const {title, description, price} = req.body
        const image = req?.file?.filename
        const product = await Product.create({title, description, price, image})
        return res.status(201).json({message : "Product created", product})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message : "Server error"})
    }
}