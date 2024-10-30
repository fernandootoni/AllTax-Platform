import { BrandRepository } from "../repository/brand.repository";

class BrandService {
  private brandRepository = new BrandRepository()

  get(product_id: number) {
    return this.brandRepository.get(product_id)
  }
}

export { BrandService }