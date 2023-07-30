import { DataTypes, Model, Sequelize } from "sequelize";

export class MessageModel extends Model {
  public MessageId!: string;
  public SenderId!: string;
  public ReceiverId!: string;
  public Content!: string;
}

export function initializeMessageModel(sequelize: Sequelize) {
  MessageModel.init(
    {
      MessageId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      SenderId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      ReceiverId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      Content: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      tableName: "Message",
      sequelize: sequelize,
    }
  );
}
