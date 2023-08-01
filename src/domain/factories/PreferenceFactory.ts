import { Preference, PreferenceProps } from "../entities/Preference";

export class PreferenceFactory {
  static create(props: PreferenceProps, id?: string): Preference {
    return Preference.createPreference(props, id);
  }
}
