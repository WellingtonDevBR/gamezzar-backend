"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserGameUseCase = void 0;
class CreateUserGameUseCase {
    constructor(userGameRepository, userRepository, regionRepository, platformRepository, editionRepository) {
        this.userGameRepository = userGameRepository;
        this.userRepository = userRepository;
        this.regionRepository = regionRepository;
        this.platformRepository = platformRepository;
        this.editionRepository = editionRepository;
    }
    async execute(input) {
        const user = await this.userRepository.getByEmail(input.email);
        const region = await this.regionRepository.getByName(input.region);
        const platform = await this.platformRepository.getByName(input.platform);
        console.log(input);
        const edition = await this.editionRepository.getByName(input.edition);
        const userGame = await this.userGameRepository.createOrUpdate({
            ...input,
            userId: user.UserId,
            regionId: region.RegionId,
            platformId: platform.PlatformId,
            editionId: edition.EditionId,
        });
        return {
            status: "success",
            message: "Successfully created user game",
        };
    }
}
exports.CreateUserGameUseCase = CreateUserGameUseCase;
//# sourceMappingURL=CreateUserGameUseCase.js.map