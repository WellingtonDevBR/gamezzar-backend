import { Preference } from "../entities/Preference";

export interface IPreferenceRepository {
  save(preference: Preference): Promise<any>;
  getByUserId(userId: string): Promise<any>;
}
