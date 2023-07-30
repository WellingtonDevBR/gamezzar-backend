"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertObjectToSnakeCase = void 0;
function toSnakeCase(str) {
    return str
        .replace(/\.?([A-Z]+)/g, (x, y) => "_" + y.toLowerCase())
        .replace(/^_/, "");
}
function convertObjectToSnakeCase(obj) {
    if (Array.isArray(obj)) {
        return obj.map((v) => convertObjectToSnakeCase(v));
    }
    else if (obj !== null &&
        typeof obj === "object" &&
        !(obj instanceof Date)) {
        return Object.fromEntries(Object.entries(obj).map(([key, value]) => [
            toSnakeCase(key),
            convertObjectToSnakeCase(value),
        ]));
    }
    return obj;
}
exports.convertObjectToSnakeCase = convertObjectToSnakeCase;
//# sourceMappingURL=objectConverter.js.map