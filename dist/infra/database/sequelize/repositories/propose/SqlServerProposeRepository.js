"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlServerProposeRepository = void 0;
const Propose_1 = require("../../models/Propose");
const sequelize_1 = require("sequelize");
const User_1 = require("../../models/User");
const Game_1 = require("../../models/Game");
class SqlServerProposeRepository {
    async create(data) {
        const propose = data.getAllProposeInformation();
        return await Propose_1.ProposeModel.findOne({
            where: {
                BidderId: propose.bidderId,
                BidderGameId: propose.bidderGameId,
                ReceiverId: propose.receiverId,
                ReceiverGameId: propose.receiverGameId,
            },
        }).then(function (obj) {
            console.log(`TEST FOUND`, obj);
            if (obj)
                return obj.update({
                    Status: propose.status,
                });
            return Propose_1.ProposeModel.create({
                ProposeId: data.getId(),
                BidderId: propose.bidderId,
                BidderGameId: propose.bidderGameId,
                ReceiverId: propose.receiverId,
                ReceiverGameId: propose.receiverGameId,
                Status: propose.status,
            });
        });
    }
    async getByUserId(userId) {
        const proposals = await Propose_1.ProposeModel.findAll({
            raw: true,
            nest: true,
            where: {
                [sequelize_1.Op.or]: [{ BidderId: userId }, { ReceiverId: userId }],
            },
            include: [
                {
                    model: User_1.UserModel,
                    as: "bidder",
                    required: false,
                },
                {
                    model: User_1.UserModel,
                    as: "receiver",
                    required: false,
                },
                {
                    model: Game_1.GameModel,
                    as: "bidder_game",
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
    async deleteById(proposeId) {
        return await Propose_1.ProposeModel.destroy({
            where: {
                ProposeId: proposeId,
            },
        });
    }
}
exports.SqlServerProposeRepository = SqlServerProposeRepository;
//# sourceMappingURL=SqlServerProposeRepository.js.map