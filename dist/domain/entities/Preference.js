"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preference = void 0;
const entity_1 = require("../../@seedowrk/domain/entity");
class Preference extends entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    static createPreference(props, id) {
        return new Preference(props, id);
    }
    getAllPreferenceInformation() {
        return { ...this.props, id: this.getId() };
    }
}
exports.Preference = Preference;
//# sourceMappingURL=Preference.js.map