"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genre = void 0;
const entity_1 = require("../../@seedowrk/domain/entity");
class Genre extends entity_1.Entity {
    constructor(props) {
        super(props);
    }
    static createGenre(props) {
        const genre = new Genre(props);
        return genre;
    }
}
exports.Genre = Genre;
//# sourceMappingURL=Genre.js.map