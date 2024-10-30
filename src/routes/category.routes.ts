import { Request, Response, Router } from 'express'
import { CategoryController } from '../library/controller/category.controller'

const categoryRoutes = Router()

const categoryController = new CategoryController()

categoryRoutes.get('', categoryController.get)

export { categoryRoutes }