import { DataTypes, Model, Sequelize } from "sequelize";

export class GameEditionModel extends Model {
  public EditionId!: string;
  public GameId!: string;
}

export function initializeGameEditionModel(sequelize: Sequelize) {
  GameEditionModel.init(
    {
      EditionId: {
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
      tableName: "GameEdition",
      modelName: "Games_Edition",
      timestamps: true,
      sequelize,
    }
  );
}
