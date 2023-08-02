import { Entity } from "../../@seedowrk/domain/entity";

interface FeedbackProps {
  id?: string;
  transactionId: string;
  rating: string;
  comment?: string;
  giverId?: string;
  receiverId?: string;
  status?: string;
}

export class Feedback extends Entity<FeedbackProps> {
  private constructor(props: FeedbackProps, id?: string) {
    super(props, id);
  }

  static createFeedback(props: FeedbackProps, id?: string): Feedback {
    const feedback = new Feedback(props, id);
    return feedback;
  }

  getAllFeedbackInformation(): FeedbackProps {
    return { ...this.props, id: this.getId() };
  }
}
