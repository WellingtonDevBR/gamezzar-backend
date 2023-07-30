"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = exports.io = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const route_1 = require("./interfaces/rest/routes/user/route");
const sequelize_1 = require("./infra/database/sequelize");
const route_2 = require("./interfaces/rest/routes/game/route");
const aws_client_1 = require("./@seedowrk/service/aws-client");
const route_3 = require("./interfaces/rest/routes/user_game/route");
const route_4 = require("./interfaces/rest/routes/wishlist/route");
const route_5 = require("./interfaces/rest/routes/propose/route");
const route_6 = require("./interfaces/rest/routes/message/route");
const route_7 = require("./interfaces/rest/routes/chat/route");
let io;
async function startServer() {
    try {
        const awsClient = new aws_client_1.AwsClient();
        const secrets = await awsClient.fetchSecrets("gamezzar-backend");
        await sequelize_1.sequelize.authenticate();
        const app = (0, express_1.default)();
        app.use((0, cors_1.default)());
        app.use(express_1.default.json());
        app.use("/api/user", route_1.userRoutes);
        app.use("/api/game", route_2.gamesRoutes);
        app.use("/api/user-collection", route_3.userGameRoutes);
        app.use("/api/wishlist", route_4.wishlistRoutes);
        app.use("/api/propose", route_5.proposeRoutes);
        app.use("/api/message", route_6.messageRoutes);
        app.use("/api/chat", route_7.chatRoutes);
        const httpServer = http_1.default.createServer(app);
        exports.io = io = new socket_io_1.Server(httpServer, {
            cors: {
                origin: "*",
                methods: ["GET", "POST"],
            },
        });
        io.on("connection", (socket) => {
            const chatId = socket.handshake.query.chat_id;
            socket.chatId = chatId;
            socket.join(`chat-${chatId}`);
            socket.on("disconnect", () => {
                console.log("user disconnected");
            });
        });
        httpServer.listen(secrets.SOCKET_PORT, () => {
            console.log(`WebSocket server is running at http://localhost:${secrets.SOCKET_PORT}`);
        });
        app.listen(secrets.PORT, () => {
            console.log(`HTTP server is running at http://localhost:${secrets.PORT}`);
        });
    }
    catch (error) {
        console.error("Failed to start server:", error);
    }
}
exports.startServer = startServer;
startServer();
//# sourceMappingURL=server.js.map