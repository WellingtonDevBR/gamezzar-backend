import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { convertObjectToSnakeCase } from "../../../../@seedowrk/helper/objectConverter";
import { IWishlistRepository } from "../../../../domain/repository/IWishlistRepository";

interface Input {
  userName: string;
}
interface Output {}

export class GetAllWishlistByUserNameUseCase implements UseCase<Input, Output> {
  constructor(private wishlistRepository: IWishlistRepository) {}
  async execute(input: Input): Promise<Output> {
    const wishlist = await this.wishlistRepository.getAllByUserName(
      input.userName
    );

    const formattedWishlist = convertObjectToSnakeCase(wishlist);
    return formattedWishlist;
  }
}
