import { DataTypes, Model, Sequelize } from "sequelize";

export class FeedbackModel extends Model {
  public FeedbackId!: string;
  public SenderId!: string;
  public ReceiverId!: string;
  public SenderGameId!: string;
  public ReceiverGameId!: string;
  public Status!: string;
}

export function initializeFeedbackModel(sequelize: Sequelize) {
  FeedbackModel.init(
    {
      FeedbackId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      TransactionId: {
        type: new DataTypes.UUID(),
        allowNull: false,
        references: {
          model: "Transaction",
          key: "TransactionId",
        },
      },
      Rating: {
        type: new DataTypes.STRING(255),
        allowNull: false,
      },
      Comment: {
        type: new DataTypes.STRING(255),
        allowNull: true,
      },
      GiverId: {
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
      Status: {
        type: new DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      tableName: "Feedback",
      timestamps: true,
      sequelize,
    }
  );
}
