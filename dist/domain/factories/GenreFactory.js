"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreFactory = void 0;
const Genre_1 = require("../entities/Genre");
class GenreFactory {
    static create(name, image, slug, status) {
        return Genre_1.Genre.createGenre({
            name: name,
            image: image,
            slug: slug,
            status: status,
        });
    }
}
exports.GenreFactory = GenreFactory;
//# sourceMappingURL=GenreFactory.js.map