import { initializeUserModel } from "./models/User";
import { initializeGameModel } from "./models/Game";
import { sequelize } from "./config";
import { initializeUserGameModel } from "./models/UserGame";
import { initializeAddressModel } from "./models/Address";
import { initializeCategoryModel } from "./models/Category";
import { initializePlatformModel } from "./models/Platform";
import { initializeGenreModel } from "./models/GenreModel";
import { initializeEditionModel } from "./models/Edition";
import { setupAssociations } from "./associations";
import { initializeRegionModel } from "./models/Region";
import { initializeWishlistModel } from "./models/Wishlist";
import { initializeGamePlatformModel } from "./models/GamePlatform";
import { initializeGameRegionModel } from "./models/GameRegion";
import { initializeProposeModel } from "./models/Propose";
import { initializeGameEditionModel } from "./models/GameEdition";
import { initializeChatModel } from "./models/Chat";
import { initializeMessageModel } from "./models/Message";

initializeUserModel(sequelize);
initializeGameModel(sequelize);
initializeAddressModel(sequelize);
initializeUserGameModel(sequelize);
initializeCategoryModel(sequelize);
initializePlatformModel(sequelize);
initializeRegionModel(sequelize);
initializeGenreModel(sequelize);
initializeEditionModel(sequelize);
initializeWishlistModel(sequelize);
initializeGamePlatformModel(sequelize);
initializeGameRegionModel(sequelize);
initializeGameEditionModel(sequelize);
initializeProposeModel(sequelize);
initializeChatModel(sequelize);
initializeMessageModel(sequelize);

setupAssociations();

export { sequelize };