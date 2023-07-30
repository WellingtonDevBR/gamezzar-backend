import { DataTypes, Model, Sequelize } from "sequelize";

export class GameRegionModel extends Model {
  public RegionId!: string;
  public GameId!: string;
}

export function initializeGameRegionModel(sequelize: Sequelize) {
  GameRegionModel.init(
    {
      RegionId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      GameId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
