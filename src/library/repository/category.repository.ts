import { ICategory } from "../../model/category.model";

class CategoryRepository {
  private categories: ICategory[] = [
    { id: 1, name: 'Food'},
    { id: 2, name: 'Drink'},
    { id: 3, name: 'Fruit'},
  ]

  get() {
    return this.categories
  }
}

export { CategoryRepository }