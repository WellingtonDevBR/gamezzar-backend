import { DataTypes, Model, Sequelize } from "sequelize";

export class UserModel extends Model {
  public UserId!: string;
  public FirstName!: string;
  public LastName!: string;
  public UserName!: string;
  public Email!: string;
  public Avatar!: string;
  public DOB!: string;
  public Gender!: string;
  public MobileNumber!: string;
  public Password!: string;
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
      DOB: {
        type: new DataTypes.STRING(8),
        allowNull: true,
      },
      Gender: {
        type: new DataTypes.STRING(6),
        allowNull: true,
      },
      MobileNumber: {
        type: new DataTypes.STRING(16),
        allowNull: true,
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
