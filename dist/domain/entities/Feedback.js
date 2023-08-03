"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feedback = void 0;
const entity_1 = require("../../@seedowrk/domain/entity");
class Feedback extends entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    static createFeedback(props, id) {
        const feedback = new Feedback(props, id);
        return feedback;
    }
    getAllFeedbackInformation() {
        return { ...this.props, id: this.getId() };
    }
}
exports.Feedback = Feedback;
//# sourceMappingURL=Feedback.js.map