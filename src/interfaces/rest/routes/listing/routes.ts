import express, { Request, Response } from "express";
import { createListingRequestController } from ".";

const listingRoutes = express.Router();

listingRoutes.post("/request", function (request: Request, response: Response) {
  createListingRequestController.handle(request, response);
});

export { listingRoutes };
