export interface IPlatformRepository {
    getByName(name: string): Promise<any>;
}