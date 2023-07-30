export interface IEditionRepository {
  getByName(name: string): Promise<any>;
}
