import { DataTypes, Model, Sequelize } from "sequelize";

export class RegionModel extends Model {
  public RegionId!: string;
  public Name!: string;
}

export function initializeRegionModel(sequelize: Sequelize) {
  RegionModel.init(
    {
      RegionId: {
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
      tableName: "Region",
      timestamps: true,
      sequelize,
    }
  );
}
