import express from "express";
import { createFeedbackController, findAllFeedbackByUserNameController } from ".";
import { authenticate } from "../../middleware/auth";

const feedbackRoutes = express.Router();

feedbackRoutes.post("/", authenticate, async (request, response) => {
  createFeedbackController.handle(request, response);
});

export { feedbackRoutes };
