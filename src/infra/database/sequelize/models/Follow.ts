import { DataTypes, Model, Sequelize } from "sequelize";

export class FollowModel extends Model {
  public FollowId!: string;
  public FollowerId!: string;
  public FolloweeId!: string;
}

export function initializeFollowModel(sequelize: Sequelize) {
  FollowModel.init(
    {
      FollowId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      FollowerId: {
        type: new DataTypes.UUID(),
        allowNull: false,
        references: {
          model: "User",
          key: "UserId",
        },
      },
      FolloweeId: {
        type: new DataTypes.UUID(),
        allowNull: false,
        references: {
          model: "User",
          key: "UserId",
        },
      },
    },
    {
      tableName: "Follow",
      timestamps: true,
      sequelize,
    }
  );
}
