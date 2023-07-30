"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformFactory = void 0;
const Platform_1 = require("../entities/Platform");
class PlatformFactory {
    static create(name, image, brand, slug, status) {
        return Platform_1.Platform.createPlatform({ name, image, brand, slug, status });
    }
}
exports.PlatformFactory = PlatformFactory;
//# sourceMappingURL=PlatformFactory.js.map