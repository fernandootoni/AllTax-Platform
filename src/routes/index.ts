import { Router } from "express";
import { categoryRoutes } from "./category.routes";
import { productRoutes } from "./product.routes";
import { brandRoutes } from "./brand.routes";
import { saleRoutes } from "./sale.routes";

const appRouter = Router()

appRouter.use('/brands', brandRoutes)
appRouter.use('/categories', categoryRoutes)
appRouter.use('/products', productRoutes)
appRouter.use('/sales', saleRoutes)

export { appRouter }