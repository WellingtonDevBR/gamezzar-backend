import { DataTypes, Model, Sequelize } from "sequelize";

export class GameModel extends Model {
  public GameId!: string;
  public Title!: string;
  public Description!: string;
  public ReleaseDate!: Date;
  public Producer!: string;
  public OfficialLink!: string;
  public Image!: string;
  public Slug!: string;
}

export function initializeGameModel(sequelize: Sequelize) {
  GameModel.init(
    {
      GameId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      Title: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      Description: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      ReleaseDate: {
        type: new DataTypes.DATE(),
        allowNull: false,
      },
      Producer: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      OfficialLink: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      Image: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      OfficialVideoLink: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      Slug: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
    },
    {
      tableName: "Game",
      timestamps: true,
      sequelize,
    }
  );
}
