import express from 'express'
import { postProduct, getProduct, deleteProduct, updateProduct } from "../controllers/product.controller.js";
import upload from '../utils/multer.js';
const router = express.Router()

router.post('/postproduct', upload.single('image') ,postProduct);

router.get('/getproduct', getProduct)

router.delete('/deleteproduct/:id', deleteProduct)

router.put('/updateproduct/:id', upload.single('image'), updateProduct)

export default router;
