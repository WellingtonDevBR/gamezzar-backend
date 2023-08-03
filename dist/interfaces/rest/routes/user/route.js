"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const _1 = require(".");
const auth_1 = require("../../middleware/auth");
const multer_1 = __importDefault(require("multer"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const SqlServerUserRepository_1 = require("../../../../infra/database/sequelize/repositories/user/SqlServerUserRepository");
const constants_1 = require("../../../../@seedowrk/helper/constants");
const aws_client_1 = require("../../../../@seedowrk/service/aws-client");
require("dotenv").config();
var googleMapsClient = require("@google/maps").createClient({
    key: "AIzaSyA0N_z3NOgTc8FOeKCAhoWah-GzoExKFDE",
});
const userRoutes = express_1.default.Router();
exports.userRoutes = userRoutes;
userRoutes.post("/login", async (request, response) => {
    _1.loginUserController.handle(request, response);
});
userRoutes.post("/register", async (request, response) => {
    _1.createUserController.handle(request, response);
});
userRoutes.get("/compare-locations/:origin/:destination", async (request, response) => {
    googleMapsClient.distanceMatrix({
        origins: [request.params.origin],
        destinations: [request.params.destination],
        mode: "driving",
        units: "metric",
    }, function (err, apiResponse) {
        if (!err) {
            var distance = apiResponse.json.rows[0].elements[0].distance;
            console.log(distance);
            response.status(200).json({ message: "Success", distance: distance });
        }
        else {
            console.log(err);
            response.status(500).json({ message: "Error", error: err });
        }
    });
});
userRoutes.put("/details/update", auth_1.authenticate, async (request, response) => {
    _1.updateDetailsByIdController.handle(request, response);
});
aws_sdk_1.default.config.update({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION_NAME,
});
const s3 = new aws_sdk_1.default.S3();
const upload = (0, multer_1.default)({
    storage: multer_1.default.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
});
userRoutes.post("/profile-image/upload", upload.single("file"), auth_1.authenticate, async (request, response) => {
    const awsClient = new aws_client_1.AwsClient();
    const secrets = await awsClient.fetchSecrets("gamezzar-backend");
    const imagePath = (0, constants_1.generateRandomString)(10);
    try {
        if (!request.file) {
            response.status(400).send("No file uploaded");
            return;
        }
        const file = request.file;
        const { userId } = request.body;
        const params = {
            Bucket: secrets.AWS_S3_BUCKET_NAME,
            Key: `avatar/${imagePath}`,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read",
        };
        s3.upload(params, async function (err, data) {
            if (err) {
                throw err;
            }
            console.log(`File uploaded successfully. ${data.Location}`);
            await new SqlServerUserRepository_1.SqlServerUserRepository().updateAvatar(userId, imagePath);
            response.json({
                message: "Profile image updated successfully",
                profileImage: data.Location,
            });
        });
    }
    catch (error) {
        console.log(error);
        response.status(500).send(error);
    }
});
userRoutes.get("/top-vendors", async (request, response) => {
    _1.getAllUsersController.handle(request, response);
});
userRoutes.get("/details", auth_1.authenticate, async (request, response) => {
    _1.getUserController.handle(request, response);
});
userRoutes.post("/preferences", auth_1.authenticate, async (request, response) => {
    _1.addPreferenceByIdController.handle(request, response);
});
userRoutes.get("/preferences", auth_1.authenticate, async (request, response) => {
    _1.getPreferencesByIdController.handle(request, response);
});
userRoutes.get("/:user_name", async (request, response) => {
    _1.getUserByUserNameController.handle(request, response);
});
//# sourceMappingURL=route.js.map