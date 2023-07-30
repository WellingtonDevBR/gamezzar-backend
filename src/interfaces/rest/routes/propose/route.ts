import express, { Request, Response } from "express";
import { createProposeController, getProposalsByUserIdController } from ".";
import { authenticate } from "../../middleware/auth";

const proposeRoutes = express.Router();

proposeRoutes.post(
  "/",
  authenticate,
  (request: Request, response: Response) => {
    createProposeController.handle(request, response);
  }
);

proposeRoutes.get(
  "/all",
  authenticate,
  (request: Request, response: Response) => {
    getProposalsByUserIdController.handle(request, response);
  }
);

export { proposeRoutes };
