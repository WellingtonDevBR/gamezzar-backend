export interface IRegionRepository {
    getByName(name: string): Promise<any>;
}