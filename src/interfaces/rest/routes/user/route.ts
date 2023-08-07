import express, { Request, Response } from "express";
import {
  loginUserController,
  createUserController,
  getUserController,
  getUserByUserNameController,
  getAllUsersController,
  updateDetailsByIdController,
  addPreferenceByIdController,
  getPreferencesByIdController,
  getUserOpportunitiesController,
} from ".";
import { authenticate } from "../../middleware/auth";
import multer from "multer";
import AWS from "aws-sdk";
import { SqlServerUserRepository } from "../../../../infra/database/sequelize/repositories/user/SqlServerUserRepository";
import { generateRandomString } from "../../../../@seedowrk/helper/constants";
import { AwsClient } from "../../../../@seedowrk/service/aws-client";
import { findAllFeedbackByUserNameController } from "../feedback";
import { getAllWishlistByUserNameController } from "../wishlist";
import {
  createFollowController,
  findAllFollowersController,
  findOneFollowerController,
  unfollowController,
} from "../follow";
require("dotenv").config();
var googleMapsClient = require("@google/maps").createClient({
  key: "AIzaSyA0N_z3NOgTc8FOeKCAhoWah-GzoExKFDE",
});

const userRoutes = express.Router();

userRoutes.post("/login", async (request: Request, response: Response) => {
  loginUserController.handle(request, response);
});

userRoutes.post("/register", async (request: Request, response: Response) => {
  createUserController.handle(request, response);
});

userRoutes.post(
  "/follow",
  authenticate,
  async (request: Request, response: Response) => {
    createFollowController.handle(request, response);
  }
);

userRoutes.get(
  "/opportunities",
  authenticate,
  async (request: Request, response: Response) => {
    getUserOpportunitiesController.handle(request, response);
  }
);

userRoutes.get(
  "/follow",
  authenticate,
  async (request: Request, response: Response) => {
    findAllFollowersController.handle(request, response);
  }
);

userRoutes.get(
  "/follow/:username",
  authenticate,
  async (request: Request, response: Response) => {
    findOneFollowerController.handle(request, response);
  }
);

userRoutes.delete(
  "/unfollow",
  authenticate,
  async (request: Request, response: Response) => {
    unfollowController.handle(request, response);
  }
);

userRoutes.get("/:username/feedbacks", async (request, response) => {
  findAllFeedbackByUserNameController.handle(request, response);
});

userRoutes.get("/:username/wishlist", async (request, response) => {
  getAllWishlistByUserNameController.handle(request, response);
});

userRoutes.get(
  "/compare-locations/:origin/:destination",
  async (request: Request, response: Response) => {
    googleMapsClient.distanceMatrix(
      {
        origins: [request.params.origin],
        destinations: [request.params.destination],
        mode: "driving",
        units: "metric",
      },
      function (err: any, apiResponse: any) {
        if (!err) {
          var distance = apiResponse.json.rows[0].elements[0].distance;
          response.status(200).json({ message: "Success", distance: distance });
        } else {
          response.status(500).json({ message: "Error", error: err });
        }
      }
    );
  }
);

userRoutes.put(
  "/details/update",
  authenticate,
  async (request: Request, response: Response) => {
    updateDetailsByIdController.handle(request, response);
  }
);

// Configuring AWS SDK
AWS.config.update({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION_NAME,
});

const s3 = new AWS.S3();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // keep images size < 5 MB
  },
});

userRoutes.post(
  "/profile-image/upload",
  upload.single("file"),
  authenticate,
  async (request: Request, response: Response) => {
    const awsClient = new AwsClient();
    const secrets = await awsClient.fetchSecrets("gamezzar-backend");
    const imagePath = generateRandomString(10);
    try {
      if (!request.file) {
        response.status(400).send("No file uploaded");
        return;
      }
      const file = request.file;
      const { userId } = request.body; // Assume user is available in request after authentication
      // Setting up S3 upload parameters
      const params: any = {
        Bucket: secrets.AWS_S3_BUCKET_NAME,
        Key: `avatar/${imagePath}`, // User id as folder name
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: "public-read", // Your bucket must have public read access
      };

      // Uploading files to the bucket
      s3.upload(params, async function (err: any, data: any) {
        if (err) {
          throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);

        await new SqlServerUserRepository().updateAvatar(userId, imagePath);

        // Update the user's profile image
        // user.profileImage = data.Location; // The URL of the file in S3
        // await user.save();
        response.json({
          message: "Profile image updated successfully",
          profileImage: data.Location,
        });
      });
    } catch (error) {
      console.log(error);
      response.status(500).send(error);
    }
  }
);

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

userRoutes.post(
  "/preferences",
  authenticate,
  async (request: Request, response: Response) => {
    addPreferenceByIdController.handle(request, response);
  }
);

userRoutes.get(
  "/preferences",
  authenticate,
  async (request: Request, response: Response) => {
    getPreferencesByIdController.handle(request, response);
  }
);

userRoutes.get("/:user_name", async (request: Request, response: Response) => {
  getUserByUserNameController.handle(request, response);
});

export { userRoutes };
