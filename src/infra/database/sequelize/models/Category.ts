import { DataTypes, Model, Sequelize } from "sequelize";

export class CategoryModel extends Model {
  public CategoryId!: string;
  public Name!: string;
}

export function initializeCategoryModel(sequelize: Sequelize) {
  CategoryModel.init(
    {
      CategoryId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      Name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
    },
    {
      tableName: "Category",
      timestamps: true,
      sequelize,
    }
  );
}
