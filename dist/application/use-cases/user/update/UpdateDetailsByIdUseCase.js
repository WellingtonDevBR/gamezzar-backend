"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDetailsByIdUseCase = void 0;
const AddressFactory_1 = require("../../../../domain/factories/AddressFactory");
class UpdateDetailsByIdUseCase {
    constructor(userRepository, addressRepository) {
        this.userRepository = userRepository;
        this.addressRepository = addressRepository;
    }
    async execute(input) {
        const user = await this.userRepository.getById(input.userId);
        if (!user)
            throw new Error("User not found");
        const updated = await this.userRepository.update({
            ...user,
            email: input.email,
            gender: input.gender,
            mobileNumber: input.mobileNumber,
            dob: input.dob,
        });
        const addressFactory = AddressFactory_1.AddressFactory.create(input.userId, input.address, input.country);
        const createdAddress = await this.addressRepository.create(addressFactory);
        if (!createdAddress) {
            throw new Error("Address not found");
        }
        return {
            status: "created",
            message: "User updated successfully",
        };
    }
}
exports.UpdateDetailsByIdUseCase = UpdateDetailsByIdUseCase;
//# sourceMappingURL=UpdateDetailsByIdUseCase.js.map