import express from 'express'
import { postProduct } from "../controllers/product.controller.js";
import upload from '../utils/multer.js';
const router = express.Router()

router.post('/postproduct', upload.single('image') ,postProduct)

export default router;
