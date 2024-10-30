import express from "express";
import { CategoryService } from "../service/category.service";

class CategoryController {
  async get(req: express.Request, res: express.Response): Promise<any> {
    const categoryService = new CategoryService()

    const categories = categoryService.get()

    res.status(200).json(categories)
  }
}

export { CategoryController }