import express, { Request, Response } from "express";
import {
  loginUserController,
  createUserController,
  getUserController,
  getUserByUserNameController,
  getAllUsersController,
} from ".";
import { authenticate } from "../../middleware/auth";

const userRoutes = express.Router();

userRoutes.post("/login", async (request: Request, response: Response) => {
  loginUserController.handle(request, response);
});

userRoutes.post("/register", async (request: Request, response: Response) => {
  createUserController.handle(request, response);
});

userRoutes.get("/top-vendors", async (request: Request, response: Response) => {
  getAllUsersController.handle(request, response);
});

userRoutes.get(
  "/details",
  authenticate,
  async (request: Request, response: Response) => {
    getUserController.handle(request, response);
  }
);

userRoutes.get("/:user_name", async (request: Request, response: Response) => {
  getUserByUserNameController.handle(request, response);
});



export { userRoutes };
