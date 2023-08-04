"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowFactory = void 0;
const FollowId_1 = require("../entities/FollowId");
class FollowFactory {
    static create(followerId, followeeId) {
        return FollowId_1.Follow.createFollow({ followerId, followeeId });
    }
}
exports.FollowFactory = FollowFactory;
//# sourceMappingURL=FollowFactory.js.map