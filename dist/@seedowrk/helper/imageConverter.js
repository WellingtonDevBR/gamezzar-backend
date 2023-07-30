"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageToPngConverter = void 0;
const sharp_1 = __importDefault(require("sharp"));
class ImageToPngConverter {
    async convertImageToPng(imagePath) {
        const pngPath = imagePath.replace(/\.[^/.]+$/, "") + ".png";
        await (0, sharp_1.default)(imagePath).png().toFile(pngPath);
        return pngPath;
    }
}
exports.ImageToPngConverter = ImageToPngConverter;
//# sourceMappingURL=imageConverter.js.map