import express from "express";
import { createFeedbackController } from ".";

const feedbackRoutes = express.Router();

feedbackRoutes.post("/", async (request, response) => {
  createFeedbackController.handle(request, response);
});

export { feedbackRoutes };
