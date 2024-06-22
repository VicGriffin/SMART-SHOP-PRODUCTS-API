import {Router} from 'express'
import {GetAllProducts,GetOneProduct,UpdateProduct,DeleteProduct,CreateNewProduct} from '../controllers/products.controllers.js'

const router = Router();

router.get('/products', GetAllProducts)

router.get('/products/:id',GetOneProduct)

router.patch('/products/:id',UpdateProduct)

router.delete('/products/:id',DeleteProduct)

router.post('/products',CreateNewProduct)
