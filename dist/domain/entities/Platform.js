"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Platform = void 0;
const entity_1 = require("../../@seedowrk/domain/entity");
class Platform extends entity_1.Entity {
    constructor(props) {
        super(props);
    }
    static createPlatform(props) {
        const console = new Platform(props);
        return console;
    }
}
exports.Platform = Platform;
//# sourceMappingURL=Platform.js.map