"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const uniqueEntityID_1 = require("./uniqueEntityID");
class Entity {
    constructor(props, id) {
        this._id = id ? id : (0, uniqueEntityID_1.UniqueEntityID)();
        this.props = props;
    }
    getId() {
        return this._id;
    }
}
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map