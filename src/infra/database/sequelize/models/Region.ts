import { DataTypes, Model, Sequelize } from "sequelize";

export class RegionModel extends Model {
  public RegionId!: number;
  public Name!: string;
}

export function initializeRegionModel(sequelize: Sequelize) {
  RegionModel.init(
    {
      RegionId: {
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
      tableName: "Region",
      timestamps: true,
      sequelize,
    }
  );
}
