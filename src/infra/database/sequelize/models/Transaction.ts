import { DataTypes, Model, Sequelize } from "sequelize";

export class TransactionModel extends Model {
  public TransactionId!: string;
  public SenderId!: string;
  public ReceiverId!: string;
  public SenderGameId!: string;
  public ReceiverGameId!: string;
  public Status!: string;
}

export function initializeTransactionModel(sequelize: Sequelize) {
  TransactionModel.init(
    {
      TransactionId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      SenderId: {
        type: new DataTypes.UUID(),
        allowNull: false,
        references: {
          model: "User",
          key: "UserId",
        },
      },
      ReceiverId: {
        type: new DataTypes.UUID(),
        allowNull: false,
        references: {
          model: "User",
          key: "UserId",
        },
      },
      SenderGameId: {
        type: new DataTypes.UUID(),
        allowNull: false,
        references: {
          model: "Game",
          key: "GameId",
        },
      },
      ReceiverGameId: {
        type: new DataTypes.UUID(),
        allowNull: false,
        references: {
          model: "Game",
          key: "GameId",
        },
      },
      Status: {
        type: new DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      tableName: "Transaction",
      timestamps: true,
      sequelize,
    }
  );
}
