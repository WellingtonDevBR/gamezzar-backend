import express, { Request, Response } from "express";
import { createWishlistController, getAllWishlistController, updateWishlistByIdController } from ".";
import { authenticate } from "../../middleware/auth";

const wishlistRoutes = express.Router();

wishlistRoutes.post("/", async (request: Request, response: Response) => {
  createWishlistController.handle(request, response);
});

wishlistRoutes.get(
  "/",
  authenticate,
  async (request: Request, response: Response) => {
    getAllWishlistController.handle(request, response);
  }
);

wishlistRoutes.put('/:id', authenticate, async (request: Request, response: Response) => {
  updateWishlistByIdController.handle(request, response);
});

export { wishlistRoutes };
