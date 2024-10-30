import { CategoryRepository } from "../repository/category.repository"

class CategoryService {
  private categoryRepository = new CategoryRepository()

  get() {
    return this.categoryRepository.get()
  }
}

export { CategoryService }