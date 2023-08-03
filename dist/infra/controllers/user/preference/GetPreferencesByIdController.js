"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPreferencesByIdController = void 0;
class GetPreferencesByIdController {
    constructor(getPreferencesByIdController) {
        this.getPreferencesByIdController = getPreferencesByIdController;
    }
    async handle(request, response) {
        try {
            const { userId } = request.body;
            const preferences = await this.getPreferencesByIdController.execute({
                userId,
            });
            return response.status(200).json(preferences);
        }
        catch (error) {
            return response.status(400).json({
                message: error || "Unexpected error.",
            });
        }
    }
}
exports.GetPreferencesByIdController = GetPreferencesByIdController;
//# sourceMappingURL=GetPreferencesByIdController.js.map