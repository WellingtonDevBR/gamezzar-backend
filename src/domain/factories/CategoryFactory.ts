import { Category } from "../entities/Category";

export class CategoryFactory {
  static create(name: string, status: string): Category {
    return Category.createCategory({
      name,
      status,
    });
  }
}
