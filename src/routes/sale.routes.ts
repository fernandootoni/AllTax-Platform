import { Router } from "express";
import { SaleController } from "../library/controller/sale.controller";

const saleRoutes = Router()

const saleController = new SaleController()

saleRoutes.get('', saleController.get)

export { saleRoutes }