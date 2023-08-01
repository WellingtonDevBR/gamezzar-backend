import express, { Request, Response } from "express";
import {
  createWishlistController,
  getAllWishlistController,
  updateWishlistByIdController,
} from ".";
import { authenticate } from "../../middleware/auth";
import { SqlServerWishlistRepository } from "../../../../infra/database/sequelize/repositories/wishlist/SqlServerWishlistRepository";
import { convertObjectToSnakeCase } from "../../../../@seedowrk/helper/objectConverter";

const wishlistRoutes = express.Router();

wishlistRoutes.post(
  "/",
  authenticate,
  async (request: Request, response: Response) => {
    createWishlistController.handle(request, response);
  }
);

wishlistRoutes.get(
  "/",
  authenticate,
  async (request: Request, response: Response) => {
    getAllWishlistController.handle(request, response);
  }
);

wishlistRoutes.get(
  "/:id",
  authenticate,
  async (request: Request, response: Response) => {
    const wishlist = await new SqlServerWishlistRepository().getByGameAndUserId(
      request.params.id,
      request.body.userId
    );
    const formattedWishList = convertObjectToSnakeCase(wishlist);
    response.status(200).json(formattedWishList);
  }
);

wishlistRoutes.delete(
  "/:id",
  authenticate,
  async (request: Request, response: Response) => {
    const wishlist = await new SqlServerWishlistRepository().deleteById(
      request.params.id
    );
    response.status(200).json(wishlist);
  }
);

wishlistRoutes.put(
  "/:id",
  authenticate,
  async (request: Request, response: Response) => {
    updateWishlistByIdController.handle(request, response);
  }
);

export { wishlistRoutes };
