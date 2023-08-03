import express, { Request, Response } from "express";
import {
  createGameController,
  getAllGamesController,
  getGameByIdController,
  searchGameByNameController,
} from ".";
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const gamesRoutes = express.Router();

gamesRoutes.post(
  "/create",
  upload.single("image"),
  async (request: Request, response: Response) => {
    createGameController.handle(request, response);
  }
);

gamesRoutes.get("/get-all", async (request: Request, response: Response) => {
  getAllGamesController.handle(request, response);
});

gamesRoutes.get("/search/", async (request: Request, response: Response) => {
  searchGameByNameController.handle(request, response);
});

gamesRoutes.get("/:id", async (request: Request, response: Response) => {
  getGameByIdController.handle(request, response);
});



export { gamesRoutes };
