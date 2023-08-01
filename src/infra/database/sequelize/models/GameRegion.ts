import { DataTypes, Model, Sequelize } from "sequelize";

export class GameRegionModel extends Model {
  public RegionId!: string;
  public GameId!: string;
}

export function initializeGameRegionModel(sequelize: Sequelize) {
  GameRegionModel.init(
    {
      GameId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      RegionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "GameRegion",
      modelName: "Games_Region",
      timestamps: true,
      sequelize,
    }
  );
}
