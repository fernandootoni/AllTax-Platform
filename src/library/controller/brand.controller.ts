import express from "express";
import { BrandService } from "../service/brand.service";

class BrandController {
  async get(req: express.Request, res: express.Response): Promise<any> {
    const product = req.query.product_id

    const brandService = new BrandService()

    const brands = brandService.get(+product!)

    res.status(200).send(brands)
  }
}

export { BrandController }
