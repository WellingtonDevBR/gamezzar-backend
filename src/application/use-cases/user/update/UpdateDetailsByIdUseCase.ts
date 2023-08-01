import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { AddressFactory } from "../../../../domain/factories/AddressFactory";
import { IAddressRepository } from "../../../../domain/repository/IAddressRepository";
import { IUserRepository } from "../../../../domain/repository/IUserRepository";

interface Input {
  userId: string;
  email: string;
  gender?: string;
  mobileNumber?: string;
  dob?: string;
  address?: string;
  country?: string;
  password?: string;
}
interface Output {}

export class UpdateDetailsByIdUseCase implements UseCase<Input, Output> {
  constructor(
    private userRepository: IUserRepository,
    private addressRepository: IAddressRepository
  ) {}
  async execute(input: Input): Promise<Output> {
    const user = await this.userRepository.getById(input.userId);
    if (!user) throw new Error("User not found");
    const updated = await this.userRepository.update({
      ...user,
      email: input.email,
      gender: input.gender,
      mobileNumber: input.mobileNumber,
      dob: input.dob,
    });

    const addressFactory = AddressFactory.create(
      input.userId,
      input.address!,
      input.country!
    );

    const createdAddress = await this.addressRepository.create(addressFactory);
    if (!createdAddress) {
      throw new Error("Address not found");
    }
    return {
      status: "created",
      message: "User updated successfully",
    } as Output;
  }
}
