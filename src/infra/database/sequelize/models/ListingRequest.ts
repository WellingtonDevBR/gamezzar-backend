import { DataTypes, Model, Sequelize } from "sequelize";

export class MessageModel extends Model {
  public ListingRequestId!: string;
  public FullName!: string;
  public Email!: string;
  public GameTitle!: string;
  public Description!: string;
  public Image!: string;
  public Platform!: string;
  public Region!: string;
  public Status!: string;
}

export function initializeMessageModel(sequelize: Sequelize) {
  MessageModel.init(
    {
      ListingRequestId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      FullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      GameTitle: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      Description: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      Image: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      Platform: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      Region: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      Status: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      tableName: "ListingRequest",
      sequelize: sequelize,
    }
  );
}
