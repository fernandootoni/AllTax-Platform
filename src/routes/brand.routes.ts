import { Router } from "express";
import { BrandController } from "../library/controller/brand.controller";

const brandRoutes = Router()

const brandController = new BrandController()

brandRoutes.get('', brandController.get)

export { brandRoutes }
