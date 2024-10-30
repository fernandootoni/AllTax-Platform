import { IBrand } from "../../model/brand.model";

class BrandRepository {
  private brands: IBrand[] = [
    { id: 1, product_id: 1, name: 'Nescau'},
    { id: 2, product_id: 1, name: 'Crunch'},
    { id: 3, product_id: 1, name: 'Sucrilhos'},
    { id: 4, product_id: 2, name: 'Passatempo'},
    { id: 5, product_id: 2, name: 'Trakinas'},
    { id: 6, product_id: 2, name: 'Oreo'},
    { id: 7, product_id: 3, name: 'Visconti'},
    { id: 8, product_id: 3, name: 'Adria'},
    { id: 9, product_id: 3, name: 'Lev'},
    { id: 10, product_id: 4, name: 'Ninho'},
    { id: 11, product_id: 4, name: 'Aurora'},
    { id: 12, product_id: 4, name: 'Piracanjuba'},
    { id: 13, product_id: 5, name: 'Del Valle'},
    { id: 14, product_id: 5, name: 'Maguary'},
    { id: 15, product_id: 5, name: 'Ades'},
    { id: 16, product_id: 6, name: 'Avian'},
    { id: 17, product_id: 6, name: 'Crystal'},
    { id: 18, product_id: 6, name: 'Voss'},
    { id: 19, product_id: 7, name: 'Dwarf banana'},
    { id: 20, product_id: 7, name: 'Ladys finger banana'},
    { id: 21, product_id: 7, name: 'Sugar banana'},
    { id: 22, product_id: 8, name: 'Congo'},
    { id: 23, product_id: 8, name: 'Dixielee'},
    { id: 24, product_id: 8, name: 'Charleston'},
    { id: 25, product_id: 9, name: 'San Andreas'},
    { id: 26, product_id: 9, name: 'Albion'},
    { id: 27, product_id: 9, name: 'Festival'},
  ]

  get(product_id: number) {
    return this.brands.filter((row) => row.product_id === product_id)
  }
}

export { BrandRepository }