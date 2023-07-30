import { DataTypes, Model, Sequelize } from "sequelize";

export class GameCategoryModel extends Model {
  public CategoryId!: string;
  public GameId!: string;
}

export function initializeGameCategoryModel(sequelize: Sequelize) {
  GameCategoryModel.init(
    {
      CategoryId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      GameId: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
    },
    {
      tableName: "GameCategory",
      timestamps: true,
      sequelize,
    }
  );
}
