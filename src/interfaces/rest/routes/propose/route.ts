import express, { Request, Response } from "express";
import { createProposeController, getProposalsByUserIdController } from ".";
import { authenticate } from "../../middleware/auth";
import { SqlServerProposeRepository } from "../../../../infra/database/sequelize/repositories/propose/SqlServerProposeRepository";

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

proposeRoutes.delete("/:id", async (request: Request, response: Response) => {
  // deleteProposeController.handle(request, response);
  const deletedPropose = await new SqlServerProposeRepository().deleteById(
    request.params.id
  );

  response.status(200).json(deletedPropose);
});

export { proposeRoutes };
