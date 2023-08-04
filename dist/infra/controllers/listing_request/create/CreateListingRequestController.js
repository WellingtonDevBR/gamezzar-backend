"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateListingRequestController = void 0;
class CreateListingRequestController {
    constructor(createListingRequestUseCase) {
        this.createListingRequestUseCase = createListingRequestUseCase;
    }
    async handle(request, response) {
        const { fullName, email, title, description, image, platform, region, officialLink, status, } = request.body;
        try {
            await this.createListingRequestUseCase.execute({
                fullName,
                email,
                gameTitle: title,
                description,
                officialLink,
                imagePath: image,
                platform,
                region,
                status: "pending",
            });
            return response.status(201).send();
        }
        catch (error) {
            return response.status(400).json({
                message: error || "Unexpected error.",
            });
        }
    }
}
exports.CreateListingRequestController = CreateListingRequestController;
//# sourceMappingURL=CreateListingRequestController.js.map