import { DataTypes, Model, Sequelize } from "sequelize";
const { v4: uuidv4 } = require("uuid");

export class PreferenceModel extends Model {
  public PreferenceId!: string;
  public UserId!: string;
  public StatusMessage!: string | null;
  public NotificationSiteEmails!: boolean;
  public NotificationPartnerEmails!: boolean;
  public ShipmentInPerson!: boolean;
  public ShipmentPostal!: boolean;
  public ShipmentCourier!: boolean;
  public PlaystationNetworkId!: string | null;
  public XBOXLiveGamertag!: string | null;
  public PlaystationFive!: number;
  public PlaystationFour!: number;
  public PlaystationThree!: number;
  public XboxOne!: number;
  public Xbox360!: number;
  public WiiU!: number;
  public Wii!: number;
  public PsVita!: number;
  public Nitendo3DS!: number;
}

export function initializePreferenceModel(sequelize: Sequelize) {
  PreferenceModel.init(
    {
      PreferenceId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: () => uuidv4(),
      },
      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "User", // Replace "User" with the actual name of the User table if different
          key: "UserId",
        },
      },
      StatusMessage: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      NotificationSiteEmails: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      NotificationPartnerEmails: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      ShipmentInPerson: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      ShipmentPostal: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      ShipmentCourier: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      PlaystationNetworkId: {
        type: DataTypes.STRING(16),
        allowNull: true,
      },
      XBOXLiveGamertag: {
        type: DataTypes.STRING(16),
        allowNull: true,
      },
      PlaystationFive: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
          isIn: [[1, 2, 3, 4]],
        },
      },
      PlaystationFour: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
          isIn: [[1, 2, 3, 4]],
        },
      },
      PlaystationThree: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
          isIn: [[1, 2, 3, 4]],
        },
      },
      XboxOne: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
          isIn: [[1, 2, 3, 4]],
        },
      },
      Xbox360: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
          isIn: [[1, 2, 3, 4]],
        },
      },
      WiiU: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
          isIn: [[1, 2, 3, 4]],
        },
      },
      Wii: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
          isIn: [[1, 2, 3, 4]],
        },
      },
      PsVita: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
          isIn: [[1, 2, 3, 4]],
        },
      },
      Nitendo3DS: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
          isIn: [[1, 2, 3, 4]],
        },
      },
    },
    {
      sequelize,
      modelName: "Preference",
      timestamps: true,
    }
  );
}
