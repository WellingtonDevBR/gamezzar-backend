"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingRequest = void 0;
const entity_1 = require("../../@seedowrk/domain/entity");
class ListingRequest extends entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    static createListingRequest(props, id) {
        return new ListingRequest(props, id);
    }
    getAllListingRequestInformation() {
        return { ...this.props, id: this.getId() };
    }
}
exports.ListingRequest = ListingRequest;
//# sourceMappingURL=ListingRequest.js.map