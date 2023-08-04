"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingRequestFactory = void 0;
const ListingRequest_1 = require("../entities/ListingRequest");
class ListingRequestFactory {
    static create(fullName, email, gameTitle, platform, region, description, officialLink, imagePath, status) {
        return ListingRequest_1.ListingRequest.createListingRequest({
            fullName,
            email,
            gameTitle,
            description,
            platform,
            region,
            officialLink,
            imagePath,
            status,
        });
    }
}
exports.ListingRequestFactory = ListingRequestFactory;
//# sourceMappingURL=ListingRequestFactory.js.map