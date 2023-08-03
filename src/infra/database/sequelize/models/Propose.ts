import { DataTypes, Model, Sequelize } from "sequelize";

export class ProposeModel extends Model {
  public ProposeId!: string;
  public BidderGameId!: string;
  public ReceiverGameId!: string;
  public BidderId!: string;
  public ReceiverId!: string;
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
      BidderId: {
        type: new DataTypes.STRING(128),
        allowNull: false,
        references: {
          model: "User",
          key: "UserId",
        },
      },
      ReceiverId: {
        type: new DataTypes.STRING(128),
        allowNull: false,
        references: {
          model: "User",
          key: "UserId",
        },
      },
      BidderGameId: {
        type: new DataTypes.STRING(128),
        allowNull: false,
        references: {
          model: "Game",
          key: "Gameid",
        },
      },
      ReceiverGameId: {
        type: new DataTypes.STRING(128),
        allowNull: false,
        references: {
          model: "Game",
          key: "Gameid",
        },
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
