"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferenceFactory = void 0;
const Preference_1 = require("../entities/Preference");
class PreferenceFactory {
    static create(props, id) {
        return Preference_1.Preference.createPreference(props, id);
    }
}
exports.PreferenceFactory = PreferenceFactory;
//# sourceMappingURL=PreferenceFactory.js.map