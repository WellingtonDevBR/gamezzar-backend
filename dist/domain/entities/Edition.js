"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Edition = void 0;
const entity_1 = require("../../@seedowrk/domain/entity");
class Edition extends entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    static createEdition(props, id) {
        const edition = new Edition(props, id);
        return edition;
    }
    getAllEditionInformation() {
        return { ...this.props, id: this.getId() };
    }
}
exports.Edition = Edition;
//# sourceMappingURL=Edition.js.map