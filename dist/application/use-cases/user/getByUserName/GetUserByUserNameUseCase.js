"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByUserNameUseCase = void 0;
class GetUserByUserNameUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(request) {
        const user = await this.usersRepository.getByUserName(request.userName);
        const userFormmat = {
            first_name: user.FirstName,
            last_name: user.LastName,
            user_name: user.UserName,
            avatar: user.Avatar,
            created_at: user.dataValues.CreatedAt,
            preference: {
                status_message: user.get().preference?.StatusMessage,
                shipment_in_person: user.get().preference?.ShipmentInPerson,
                shipment_by_postal: user.get().preference?.ShipmentPostal,
                shipment_by_courier: user.get().preference?.ShipmentCourier,
            },
            address: {
                address: user.get().address?.Address,
            },
            collections: user.get().collections.map((game) => {
                return {
                    game_id: game.item.GameId,
                    title: game.item.Title,
                    image: game.item.Image,
                    disposition: game.Disposition,
                    details: {
                        platform: game.hasplatform.Name,
                        region: game.hasregion.Name,
                    },
                };
            }),
        };
        return userFormmat;
    }
}
exports.GetUserByUserNameUseCase = GetUserByUserNameUseCase;
//# sourceMappingURL=GetUserByUserNameUseCase.js.map