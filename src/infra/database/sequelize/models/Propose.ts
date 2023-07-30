import { DataTypes, Model, Sequelize } from "sequelize";

export class ProposeModel extends Model {
  public ProposeId!: string;
  public InterestedGameId!: string;
  public OwnerGameId!: string;
  public InterestedUserId!: string;
  public OwnerUserId!: string;
  public Status!: string;
}

export function initializeProposeModel(sequelize: Sequelize) {
  ProposeModel.init(
    {
      ProposeId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      InterestedGameId: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      OwnerGameId: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      InterestedUserId: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      OwnerUserId: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      Status: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
    },
    {
      tableName: "Propose",
      timestamps: true,
      sequelize,
    }
  );
}
