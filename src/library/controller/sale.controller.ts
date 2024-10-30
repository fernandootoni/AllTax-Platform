import express from "express";
import { SaleService } from "../service/sale.service";

class SaleController {
  async get(req: express.Request, res: express.Response): Promise<any> {
    const brand_id = req.query.brand_id

    const saleService = new SaleService()

    const sales = saleService.get(+brand_id!)

    res.status(200).send(sales)
  }
}

export { SaleController }