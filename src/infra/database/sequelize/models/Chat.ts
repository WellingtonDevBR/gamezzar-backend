import { DataTypes, Model, Sequelize } from "sequelize";

export class ChatModel extends Model {
  public ChatId!: string;
  public User1Id!: string;
  public User2Id!: string;
  public GameId!: string;
}

export function initializeChatModel(sequelize: Sequelize) {
  ChatModel.init(
    {
      ChatId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      User1Id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      User2Id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      GameId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      tableName: "Chat",
      sequelize: sequelize,
    }
  );
}
