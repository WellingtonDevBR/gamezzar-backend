import { DataTypes, Model, Sequelize } from "sequelize";

export class GamePlatformModel extends Model {
  public PlatformId!: string; // Foreign key referencing PlatformModel
  public GameId!: string; // Foreign key referencing GameModel
}

export function initializeGamePlatformModel(sequelize: Sequelize) {
  GamePlatformModel.init(
    {
      PlatformId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      GameId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      tableName: "GamePlatform",
      modelName: "Games_Platform",
      timestamps: true,
      sequelize,
    }
  );
}
