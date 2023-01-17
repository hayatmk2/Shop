import express from 'express'
import { getProducts, getProductsById } from '../controllers/productController.js'

const router = express.Router() //router part of express

//@desc Fetch all products
//@route  GET/api/products/
//@access public
router.get('/', getProducts)


//@desc Fetch single products
//@route  GET/api/products/
//@access public
router.get('/:id', getProductsById)

export default router