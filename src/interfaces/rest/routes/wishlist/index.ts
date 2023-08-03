import { CreateWishlistUseCase } from "../../../../application/use-cases/wishlist/create/CreateWishlistUseCase";
import { GetAllWishlistByUserNameUseCase } from "../../../../application/use-cases/wishlist/getAllByUserName/GetAllWishlistByUserNameUseCase";
import { GetAllWishlistUseCase } from "../../../../application/use-cases/wishlist/get_all/GetAllWishlistUseCase";
import { UpdateWishlistByIdUseCase } from "../../../../application/use-cases/wishlist/update/UpdateWishlistByIdUseCase";
import { CreateWishlistController } from "../../../../infra/controllers/wishlist/create/CreateWishlistController";
import { GetAllWishlistByUserNameController } from "../../../../infra/controllers/wishlist/getAllByUserName/GetAllWishlistByUserNameController";
import { GetAllWishlistController } from "../../../../infra/controllers/wishlist/get_all/GetAllWishlistController";
import { UpdateWishlistByUserIdController } from "../../../../infra/controllers/wishlist/update/UpdateWishlistByIdController";
import { SqlServerWishlistRepository } from "../../../../infra/database/sequelize/repositories/wishlist/SqlServerWishlistRepository";

const sqlServerWishlistRepository = new SqlServerWishlistRepository();

// create wish list
const createWishlistUseCase = new CreateWishlistUseCase(
  sqlServerWishlistRepository
);
const createWishlistController = new CreateWishlistController(
  createWishlistUseCase
);

// get all wishlist by user id
const getAllWishlistUseCase = new GetAllWishlistUseCase(
  sqlServerWishlistRepository
);
const getAllWishlistController = new GetAllWishlistController(
  getAllWishlistUseCase
);

// update wishlist
const updateWishlistByIdUseCase = new UpdateWishlistByIdUseCase(
  sqlServerWishlistRepository
);
const updateWishlistByIdController = new UpdateWishlistByUserIdController(
  updateWishlistByIdUseCase
);

// Wishlist by Username
const getAllWishlistByUserNameUseCase = new GetAllWishlistByUserNameUseCase(
  sqlServerWishlistRepository
);
const getAllWishlistByUserNameController = new GetAllWishlistByUserNameController(
  getAllWishlistByUserNameUseCase
);

export {
  createWishlistController,
  getAllWishlistController,
  updateWishlistByIdController,
  getAllWishlistByUserNameController
};
