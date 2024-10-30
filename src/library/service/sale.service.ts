import { SaleRepository } from "../repository/sale.repository"

class SaleService {
  private saleRepository = new SaleRepository()

  get(brand_id: number) {
    return this.saleRepository.get(brand_id)
  }
}

export { SaleService }