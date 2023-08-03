import { Entity } from "../../@seedowrk/domain/entity";

interface ProposeProps {
  id?: string;
  bidderId: string;
  receiverId: string;
  receiverGameId: string;
  bidderGameId: string;
  status: string;
}

export class Propose extends Entity<ProposeProps> {
  private constructor(props: ProposeProps, id?: string) {
    super(props, id);
  }

  static createPropose(props: ProposeProps, id?: string) {
    return new Propose(props, id);
  }

  getAllProposeInformation(): ProposeProps {
    return { ...this.props, id: this.getId() };
  }
}
