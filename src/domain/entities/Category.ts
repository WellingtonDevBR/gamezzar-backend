import { Entity } from "../../@seedowrk/domain/entity";

interface CategoryProps {
  id?: string;
  name: string;
  status: string;
}

export class Category extends Entity<CategoryProps> {
  private constructor(props: CategoryProps, id?: string) {
    super(props, id);
  }

  static createCategory(props: CategoryProps, id?: string) {
    const category = new Category(props, id);
    return category;
  }
}
