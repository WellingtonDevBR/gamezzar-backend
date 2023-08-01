import { DataTypes, Model, Sequelize } from "sequelize";

export class PlatformModel extends Model {
  public PlatformId!: string;
  public Name!: string;
}

export function initializePlatformModel(sequelize: Sequelize) {
  PlatformModel.init(
    {
      PlatformId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      Name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
    },
    {
      tableName: "Platform",
      timestamps: true,
      sequelize,
    }
  );
}
