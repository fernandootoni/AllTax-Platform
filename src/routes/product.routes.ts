import { Request, Response, Router } from 'express'
import { ProductController } from '../library/controller/product.controller'

const productRoutes = Router()

const productController = new ProductController()

productRoutes.get('', productController.get)

export { productRoutes }
