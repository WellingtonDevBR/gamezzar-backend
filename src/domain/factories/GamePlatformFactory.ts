import { GamePlatform } from "../entities/GamePlatform";


export class GamePlatformFactory {
    static create(gameId: string, platformId: string): GamePlatform {
        return GamePlatform.createGamePlatform({
        gameId,
        platformId,
        });
    }
}