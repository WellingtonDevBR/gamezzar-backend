import { Entity } from "../../@seedowrk/domain/entity";

interface IEditionProps {
  id?: string;
  name: string;
}

export class Edition extends Entity<IEditionProps> {
  private constructor(props: IEditionProps, id?: string) {
    super(props, id);
  }

  static createEdition(props: IEditionProps, id?: string): Edition {
    const edition = new Edition(props, id);
    return edition;
  }

  getAllEditionInformation(): IEditionProps {
    return { ...this.props, id: this.getId() };
  }
}
