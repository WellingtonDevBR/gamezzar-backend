import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import { userRoutes } from "./interfaces/rest/routes/user/route";
import { sequelize } from "./infra/database/sequelize";
import { gamesRoutes } from "./interfaces/rest/routes/game/route";
import { AwsClient } from "./@seedowrk/service/aws-client";
import { userGameRoutes } from "./interfaces/rest/routes/user_game/route";
import { wishlistRoutes } from "./interfaces/rest/routes/wishlist/route";
import { proposeRoutes } from "./interfaces/rest/routes/propose/route";
import { messageRoutes } from "./interfaces/rest/routes/message/route";
import { chatRoutes } from "./interfaces/rest/routes/chat/route";
import { transactionRoutes } from "./interfaces/rest/routes/transaction/routes";

let io: Server; // Add this line

async function startServer() {
  try {
    // Fetch secret values from AWS Secrets Manager
    const awsClient = new AwsClient();
    const secrets = await awsClient.fetchSecrets("gamezzar-backend");

    // Authenticate sequelize
    await sequelize.authenticate();

    // Create Express app
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/api/user", userRoutes);
    app.use("/api/game", gamesRoutes);
    app.use("/api/user-collection", userGameRoutes);
    app.use("/api/wishlist", wishlistRoutes);
    app.use("/api/propose", proposeRoutes);
    app.use("/api/message", messageRoutes);
    app.use("/api/chat", chatRoutes);
    app.use("/api/transaction", transactionRoutes);

    // Create HTTP server and wrap Express app
    const httpServer = http.createServer(app);

    // Create Socket.IO server
    io = new Server(httpServer, {
      // Use 'io' here
      // Optional: additional Socket.IO options here
      cors: {
        origin: "*", // Update this to match your client-side domain
        methods: ["GET", "POST"],
      },
    });

    io.on("connection", (socket: any) => {
      // The client will send the user ID in the query parameter, access it with socket.handshake.query
      const chatId = socket.handshake.query.chat_id;
      // Attach the user ID to the socket
      socket.chatId = chatId;

      // Join the user to a room specific to them
      socket.join(`chat-${chatId}`);

      socket.on("disconnect", () => {
        console.log("user disconnected");
      });
    });

    // Start the server
    httpServer.listen(secrets.SOCKET_PORT, () => {
      console.log(
        `WebSocket server is running at http://localhost:${secrets.SOCKET_PORT}`
      );
    });

    app.listen(secrets.PORT, () => {
      console.log(`HTTP server is running at http://localhost:${secrets.PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
}

export { io, startServer }; // Export 'io' so it can be used in other modules

startServer();
