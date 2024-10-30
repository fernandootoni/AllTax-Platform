import { ProductRepository } from "../repository/product.repository";

class ProductService {
  private productRepository = new ProductRepository()

  get(category_id: number) {
    return this.productRepository.get(category_id)
  }
}

export { ProductService }