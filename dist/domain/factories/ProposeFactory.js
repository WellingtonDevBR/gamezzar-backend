"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProposeFactory = void 0;
const Propose_1 = require("../entities/Propose");
class ProposeFactory {
    static create(interestedGameId, ownerGameId, interestedUserId, ownerUserId, status) {
        return Propose_1.Propose.createPropose({
            interestedGameId,
            ownerGameId,
            interestedUserId,
            ownerUserId,
            status,
        });
    }
}
exports.ProposeFactory = ProposeFactory;
//# sourceMappingURL=ProposeFactory.js.map