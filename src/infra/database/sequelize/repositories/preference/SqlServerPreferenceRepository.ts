import { Preference } from "../../../../../domain/entities/Preference";
import { IPreferenceRepository } from "../../../../../domain/repository/IPreferenceRepository";
import { PreferenceModel } from "../../models/Preference";

export class SqlServerPreferenceRepository implements IPreferenceRepository {
  async save(preference: Preference): Promise<any> {
    const preferenceInformation = preference.getAllPreferenceInformation();
    return PreferenceModel.findOne({
      where: {
        UserId: preferenceInformation.userId,
      },
    }).then(function (obj) {
      // update
      if (obj)
        return obj.update({
          UserId: preferenceInformation.userId,
          StatusMessage: preferenceInformation.statusMessage,
          NotificationSiteEmails:
            preferenceInformation.notificationType?.siteEmails,
          NotificationPartnerEmails:
            preferenceInformation.notificationType?.partnerEmails,
          ShipmentInPerson: preferenceInformation.shipmentType?.person,
          ShipmentPostal: preferenceInformation.shipmentType?.postal,
          ShipmentCourier: preferenceInformation.shipmentType?.courier,
          PlaystationNetworkId: preferenceInformation.psnId,
          XBOXLiveGamertag: preferenceInformation.xboxId,
          PlaystationFive: preferenceInformation.ps5,
          PlaystationFour: preferenceInformation.ps4,
          PlaystationThree: preferenceInformation.ps3,
          XBOXOne: preferenceInformation.xboxOne,
          XBOX360: preferenceInformation.xbox360,
          WiiU: preferenceInformation.wiiU,
          Wii: preferenceInformation.wii,
          PsVita: preferenceInformation.psVita,
          Nitendo3DS: preferenceInformation.nitendo3DS,
        });
      // insert
      return PreferenceModel.create({
        PreferenceId: preference.getId(),
        UserId: preferenceInformation.userId,
        StatusMessage: preferenceInformation.statusMessage,
        NotificationSiteEmails:
          preferenceInformation.notificationType?.siteEmails,
        NotificationPartnerEmails:
          preferenceInformation.notificationType?.partnerEmails,
        ShipmentInPerson: preferenceInformation.shipmentType?.person,
        ShipmentPostal: preferenceInformation.shipmentType?.postal,
        ShipmentCourier: preferenceInformation.shipmentType?.courier,
        PlaystationNetworkId: preferenceInformation.psnId,
        XBOXLiveGamertag: preferenceInformation.xboxId,
        PlaystationFive: preferenceInformation.ps5,
        PlaystationFour: preferenceInformation.ps4,
        PlaystationThree: preferenceInformation.ps3,
        XBOXOne: preferenceInformation.xboxOne,
        XBOX360: preferenceInformation.xbox360,
        WiiU: preferenceInformation.wiiU,
        Wii: preferenceInformation.wii,
        PsVita: preferenceInformation.psVita,
        Nitendo3DS: preferenceInformation.nitendo3DS,
      });
    });
  }
  async getByUserId(userId: string): Promise<any> {
    return await PreferenceModel.findOne({
      raw: true,
      where: {
        UserId: userId,
      },
    });
  }
}
