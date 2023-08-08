import express from "express";
import cors from "cors";
import http from "http";
import https from "https";
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
import { feedbackRoutes } from "./interfaces/rest/routes/feedback/route";
import { listingRoutes } from "./interfaces/rest/routes/listing/routes";
import path from "path";
import fs from "fs";

const certificate = fs.readFileSync(path.join(__dirname, "./cert.pem"), "utf8");
const privateKey = fs.readFileSync(
  path.join(__dirname, "./privkey.pem"),
  "utf8"
);
const ca = fs.readFileSync(path.join(__dirname, "./fullchain.pem"), "utf8");

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca,
};

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
    app.use(express.json({ limit: "50mb" }));
    app.use("/api/user", userRoutes);
    app.use("/api/game", gamesRoutes);
    app.use("/api/user-collection", userGameRoutes);
    app.use("/api/wishlist", wishlistRoutes);
    app.use("/api/propose", proposeRoutes);
    app.use("/api/message", messageRoutes);
    app.use("/api/chat", chatRoutes);
    app.use("/api/transaction", transactionRoutes);
    app.use("/api/feedback", feedbackRoutes);
    app.use("/api/listing", listingRoutes);

    const httpServer = https.createServer(credentials, app);

    io = new Server(httpServer, {
      cors: {
        origin: "*", 
        methods: ["GET", "POST"],
      },
    });

    io.on("connection", (socket: any) => {
      const chatId = socket.handshake.query.chat_id;
      socket.chatId = chatId;

      socket.join(`chat-${chatId}`);

      socket.on("disconnect", () => {
        console.log("user disconnected");
      });
    });

    // Start the server
    httpServer.listen(secrets.PORT, () => {
      // Use the port where you want to expose both HTTPS and WebSockets
      console.log(`Server is running at https://localhost:${secrets.PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
}

export { io, startServer }; // Export 'io' so it can be used in other modules

startServer();
