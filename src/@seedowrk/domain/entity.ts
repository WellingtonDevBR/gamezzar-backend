import { UniqueEntityID } from "./uniqueEntityID";

export abstract class Entity<T> {
    protected readonly _id: string;
    protected props: T;

    constructor(props: T, id?: string) {
        this._id = id ? id : UniqueEntityID();
        this.props = props;
    }

    getId(): string {
        return this._id;
    }
}