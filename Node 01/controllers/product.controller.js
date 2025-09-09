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

export const getProduct = async (req, res) => {
    try {
        const products = await Product.find()
        return res.status(200).json({message : "Product get Successfully", products})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message : "Server error"})
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        await Product.findByIdAndDelete(id)
        return res.status(200).json({message : "Product deleted"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message : "Server error"})
    }
}


export const updateProduct = async (req, res) => {
    try {
        const {id} = req.params
        const {title, description, price} = req.body
        const image = req?.file?.filename
        const formData = {title, description, price}
        if(image){
            formData.image = image
        }
        await Product.findByIdAndUpdate(id, formData)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message : "Server error"})
    }
}

