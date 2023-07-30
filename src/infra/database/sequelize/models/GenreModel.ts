import { DataTypes, Model, Sequelize } from "sequelize";

export class GenreModel extends Model {
  public GenreId!: string;
  public Name!: string;
}

export function initializeGenreModel(sequelize: Sequelize) {
  GenreModel.init(
    {
      GenreId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      Name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
    },
    {
      tableName: "Genre",
      timestamps: true,
      sequelize,
    }
  );
}
