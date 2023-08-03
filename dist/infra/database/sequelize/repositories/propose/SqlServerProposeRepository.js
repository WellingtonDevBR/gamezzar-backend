"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlServerProposeRepository = void 0;
const Propose_1 = require("../../models/Propose");
const sequelize_1 = require("sequelize");
const User_1 = require("../../models/User");
const Game_1 = require("../../models/Game");
class SqlServerProposeRepository {
    async deleteById(proposeId) {
        return await Propose_1.ProposeModel.destroy({
            where: {
                ProposeId: proposeId,
            },
        });
    }
    async create(data) {
        const propose = data.getAllProposeInformation();
        const createdPropose = await Propose_1.ProposeModel.create({
            id: data.getId(),
            InterestedUserId: propose.interestedUserId,
            OwnerUserId: propose.ownerUserId,
            InterestedGameId: propose.interestedGameId,
            OwnerGameId: propose.ownerGameId,
            Status: propose.status,
        });
        return createdPropose;
    }
    async getByUserId(userId) {
        try {
            const proposals = await Propose_1.ProposeModel.findAll({
                raw: true,
                nest: true,
                where: {
                    [sequelize_1.Op.or]: [{ InterestedUserId: userId }, { OwnerUserId: userId }],
                },
                include: [
                    {
                        model: User_1.UserModel,
                        as: "sender",
                        required: false,
                    },
                    {
                        model: User_1.UserModel,
                        as: "receiver",
                        required: false,
                    },
                    {
                        model: Game_1.GameModel,
                        as: "sender_game",
                        required: false,
                    },
                    {
                        model: Game_1.GameModel,
                        as: "receiver_game",
                        required: false,
                    },
                ],
            });
            return proposals;
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.SqlServerProposeRepository = SqlServerProposeRepository;
//# sourceMappingURL=SqlServerProposeRepository.js.map