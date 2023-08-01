import { Entity } from "../../@seedowrk/domain/entity";

export interface PreferenceProps {
  id?: string;
  userId: string;
  statusMessage?: string;
  notificationType?: {
    siteEmails: boolean;
    partnerEmails: boolean;
  };
  shipmentType: {
    person: boolean;
    postal: boolean;
    courier: boolean;
  };
  psnId?: string;
  xboxId?: string;
  ps5?: number;
  ps4?: number;
  ps3?: number;
  xboxOne?: number;
  xbox360?: number;
  wiiU?: number;
  wii?: number;
  psVita?: number;
  nitendo3DS?: number;
  updatedAt?: Date;
  createdAt?: Date;
}

export class Preference extends Entity<PreferenceProps> {
  private constructor(props: PreferenceProps, id?: string) {
    super(props, id);
  }

  static createPreference(props: PreferenceProps, id?: string) {
    return new Preference(props, id);
  }

  getAllPreferenceInformation(): PreferenceProps {
    return { ...this.props, id: this.getId() };
  }
}
