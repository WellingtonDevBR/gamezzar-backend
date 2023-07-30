import { DataTypes, Model, Sequelize } from "sequelize";

export class AddressModel extends Model {
  public AddressId!: string;
  public UserId!: string;
  public Address!: string;
  public Country!: string;
}

export function initializeAddressModel(sequelize: Sequelize) {
  AddressModel.init(
    {
      AddressId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      Address: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      Country: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
    },
    {
      tableName: "Address",
      timestamps: true,
      sequelize,
    }
  );
}
