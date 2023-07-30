"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Propose = void 0;
const entity_1 = require("../../@seedowrk/domain/entity");
class Propose extends entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    static createPropose(props, id) {
        return new Propose(props, id);
    }
    getAllProposeInformation() {
        return { ...this.props, id: this.getId() };
    }
}
exports.Propose = Propose;
//# sourceMappingURL=Propose.js.map