import { DataTypes, Model, Sequelize } from "sequelize";

export class UserModel extends Model {
  public UserId!: string;
  public FirstName!: string;
  public LastName!: string;
  public UserName!: string;
  public Email!: string;
  public Password!: string;
  public RegistrationDate!: Date;
}

export function initializeUserModel(sequelize: Sequelize) {
  UserModel.init(
    {
      UserId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      FirstName: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      LastName: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      UserName: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      Avatar: {
        type: new DataTypes.STRING(128),
        allowNull: true,
      },
      Email: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      Password: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
    },
    {
      tableName: "User",
      timestamps: true,
      sequelize,
    }
  );
}
