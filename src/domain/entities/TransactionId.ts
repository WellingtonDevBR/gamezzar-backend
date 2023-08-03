import { Entity } from "../../@seedowrk/domain/entity";

interface TransactionProps {
  id?: string;
  bidderId: string;
  receiverId: string;
  bidderGameId: string;
  receiverGameId: string;
  status: string;
}

export class Transaction extends Entity<TransactionProps> {
  private constructor(props: TransactionProps, id?: string) {
    super(props, id);
  }

  static createTransaction(props: TransactionProps, id?: string): Transaction {
    const transaction = new Transaction(props, id);
    return transaction;
  }

  getAllTransactionInformation(): TransactionProps {
    return { ...this.props, id: this.getId() };
  }
}
