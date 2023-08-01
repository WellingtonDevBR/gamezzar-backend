import { DataTypes, Model, Sequelize } from "sequelize";

export class UserGameModel extends Model {
  public UserId!: string;
  public GameId!: string;
  public PlatformId!: string;
  public RegionId!: string;
  public Score!: number;
  public InterestLevel!: number;
  public MediaCondition!: number;
  public BoxCondition!: number;
  public BookletCondition!: number;
  public Description!: string;
}

export function initializeUserGameModel(sequelize: Sequelize) {
  UserGameModel.init(
    {
      UserId: {
        type: new DataTypes.STRING(128),
        allowNull: false,
        references: {
          model: "User",
          key: "UserId",
        },
      },
      GameId: {
        type: new DataTypes.STRING(128),
        allowNull: false,
        references: {
          model: "Game",
          key: "GameId",
        },
      },
      PlatformId: {
        type: new DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Platform",
          key: "PlatformId",
        },
      },
      RegionId: {
        type: new DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Region",
          key: "RegionId",
        },
      },
      EditionId: {
        type: new DataTypes.STRING(128),
        allowNull: false,
        references: {
          model: "Edition",
          key: "EditionId",
        },
      },
      Satisfaction: {
        type: new DataTypes.INTEGER(),
        allowNull: false,
      },
      Disposition: {
        type: new DataTypes.INTEGER(),
        allowNull: false,
      },
      DiscCondition: {
        type: new DataTypes.INTEGER(),
        allowNull: false,
      },
      CoverCondition: {
        type: new DataTypes.INTEGER(),
        allowNull: false,
      },
      ManualCondition: {
        type: new DataTypes.INTEGER(),
        allowNull: false,
      },
      Description: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
    },
    {
      tableName: "UserGame",
      modelName: "Inventory",
      timestamps: true,
      sequelize,
    }
  );
}
