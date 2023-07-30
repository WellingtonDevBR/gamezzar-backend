import { DataTypes, Model, Sequelize } from "sequelize";

export class EditionModel extends Model {
  public EditionId!: string;
  public Name!: string;
}

export function initializeEditionModel(sequelize: Sequelize) {
  EditionModel.init(
    {
      EditionId: {
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
      tableName: "Edition",
      timestamps: true,
      sequelize,
    }
  );
}
