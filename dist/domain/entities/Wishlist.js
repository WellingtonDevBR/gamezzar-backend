"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wishlist = void 0;
const entity_1 = require("../../@seedowrk/domain/entity");
class Wishlist extends entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    static createWishlist(props, id) {
        const wishlist = new Wishlist(props, id);
        return wishlist;
    }
    getAllWishlistInformation() {
        return { ...this.props, id: this.getId() };
    }
}
exports.Wishlist = Wishlist;
//# sourceMappingURL=Wishlist.js.map