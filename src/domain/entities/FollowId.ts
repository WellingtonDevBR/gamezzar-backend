import { Entity } from "../../@seedowrk/domain/entity";

interface FollowProps {
  id?: string;
  followerId: string;
  followeeId: string;
}

export class Follow extends Entity<FollowProps> {
  private constructor(props: FollowProps, id?: string) {
    super(props, id);
  }

  static createFollow(props: FollowProps, id?: string) {
    const follow = new Follow(props, id);
    return follow;
  }

  getAllFollowInformation(): FollowProps {
    return { ...this.props, id: this.getId() };
  }
}