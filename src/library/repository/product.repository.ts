import { IProduct } from "../../model/product.model";

class ProductRepository {
  private product: IProduct[] = [
    { id: 1, category_id: 1, name: 'Cereal' },
    { id: 2, category_id: 1, name: 'Biscoito' },
    { id: 3, category_id: 1, name: 'Torrada' },
    { id: 4, category_id: 2, name: 'Leite' },
    { id: 5, category_id: 2, name: 'Suco' },
    { id: 6, category_id: 2, name: 'Agua' },
    { id: 7, category_id: 3, name: 'Banana' },
    { id: 8, category_id: 3, name: 'Watermellon' },
    { id: 9, category_id: 3, name: 'Strawberry' },
  ]

  get(category_id: number) {
    return this.product.filter((row) => row.category_id === category_id)
  }
}

export { ProductRepository }