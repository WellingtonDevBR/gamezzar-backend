import { DataTypes, Model, Sequelize } from "sequelize";

export class WishlistModel extends Model {
  public WishlistId!: string;
  public UserId!: string;
  public GameId!: string;
  public InterestLevel!: string;
}

export function initializeWishlistModel(sequelize: Sequelize) {
  WishlistModel.init(
    {
      WishlistId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      UserId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      GameId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      InterestLevel: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "Wishlist",
      timestamps: true,
      sequelize,
    }
  );
}
