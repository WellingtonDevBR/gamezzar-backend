"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const constants_1 = require("../../../../@seedowrk/helper/constants");
const aws_client_1 = require("../../../../@seedowrk/service/aws-client");
const UserFactory_1 = require("../../../../domain/factories/UserFactory");
const paseto_1 = __importDefault(require("paseto"));
require("dotenv").config();
const { V4: { sign }, } = paseto_1.default;
class CreateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(input) {
        const userAlreadyExists = await this.userRepository.getByEmail(input.email);
        if (userAlreadyExists)
            throw new Error("User already exists");
        input.avatar = "avatar1.svg";
        const user = UserFactory_1.UserFactory.create(input.firstname, input.lastname, input.username, input.avatar, input.email, input.password);
        await this.userRepository.save(user);
        const token = await sign({ email: input.email, userId: user.getId(), userexp: constants_1.PASETO_EXPIRE_TIME }, constants_1.PASETO_PRIVATE_KEY);
        await new aws_client_1.AwsClient(process.env.AWS_S3_ACCESS_KEY_ID, process.env.AWS_S3_SECRET_ACCESS_KEY).sendWelcomingEmail({
            firstName: input.firstname,
            lastName: input.lastname,
            email: input.email,
        });
        return {
            token,
        };
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
//# sourceMappingURL=CreateUserUseCase.js.map