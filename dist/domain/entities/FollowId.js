"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Follow = void 0;
const entity_1 = require("../../@seedowrk/domain/entity");
class Follow extends entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    static createFollow(props, id) {
        const follow = new Follow(props, id);
        return follow;
    }
    getAllFollowInformation() {
        return { ...this.props, id: this.getId() };
    }
}
exports.Follow = Follow;
//# sourceMappingURL=FollowId.js.map