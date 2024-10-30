import express from "express";
import { ProductService } from "../service/product.service";

class ProductController {
  async get(req: express.Request, res: express.Response): Promise<any> {
    const category = req.query.category_id
    const productService = new ProductService()

    const products = productService.get(+category!)

    res.status(200).json(products)
  }
}

export { ProductController }