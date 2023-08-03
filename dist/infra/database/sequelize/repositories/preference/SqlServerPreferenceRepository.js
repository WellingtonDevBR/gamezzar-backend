"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlServerPreferenceRepository = void 0;
const Preference_1 = require("../../models/Preference");
class SqlServerPreferenceRepository {
    async save(preference) {
        const preferenceInformation = preference.getAllPreferenceInformation();
        return Preference_1.PreferenceModel.findOne({
            where: {
                UserId: preferenceInformation.userId,
            },
        }).then(function (obj) {
            if (obj)
                return obj.update({
                    UserId: preferenceInformation.userId,
                    StatusMessage: preferenceInformation.statusMessage,
                    NotificationSiteEmails: preferenceInformation.notificationType?.siteEmails,
                    NotificationPartnerEmails: preferenceInformation.notificationType?.partnerEmails,
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
            return Preference_1.PreferenceModel.create({
                PreferenceId: preference.getId(),
                UserId: preferenceInformation.userId,
                StatusMessage: preferenceInformation.statusMessage,
                NotificationSiteEmails: preferenceInformation.notificationType?.siteEmails,
                NotificationPartnerEmails: preferenceInformation.notificationType?.partnerEmails,
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
    async getByUserId(userId) {
        return await Preference_1.PreferenceModel.findOne({
            raw: true,
            where: {
                UserId: userId,
            },
        });
    }
}
exports.SqlServerPreferenceRepository = SqlServerPreferenceRepository;
//# sourceMappingURL=SqlServerPreferenceRepository.js.map