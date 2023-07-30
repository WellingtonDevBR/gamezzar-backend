"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlServerUserRepository = void 0;
const User_1 = require("../../models/User");
class SqlServerUserRepository {
    async save(user) {
        const { id, firstName, lastName, username, avatar, email, password } = user.getAllUserInformation();
        const userData = {
            UserID: id,
            FirstName: firstName.value,
            LastName: lastName.value,
            UserName: username.value,
            Avatar: avatar,
            Email: email.value,
            Password: password.value,
            RegistrationDate: new Date(),
        };
        const createdUser = await User_1.UserModel.create(userData);
        const outputData = {
            first_name: createdUser.FirstName,
            last_name: createdUser.LastName,
            user_name: createdUser.UserName,
            email: createdUser.Email,
        };
        return outputData;
    }
    async get(id) {
        throw new Error("Method not implemented.");
    }
    async getAll() {
        const users = await User_1.UserModel.findAll({
            raw: true,
        });
        return users;
    }
    async getByEmail(email) {
        const user = await User_1.UserModel.findOne({
            raw: true,
            where: {
                Email: email,
            },
        });
        return user;
    }
    async getById(id) {
        return await User_1.UserModel.findOne({
            raw: true,
            where: {
                UserID: id,
            },
        });
    }
    async getByUserName(name) {
        const user = await User_1.UserModel.findOne({
            raw: true,
            where: {
                UserName: name,
            },
        });
        return user;
    }
    async add(user) {
        throw new Error("Method not implemented.");
    }
    async update(user) {
        throw new Error("Method not implemented.");
    }
}
exports.SqlServerUserRepository = SqlServerUserRepository;
//# sourceMappingURL=SqlServerUserRepository.js.map