export class Name {
  value: string;

  constructor(value: string) {
    if (!value || value.length < 2) {
      throw new Error("Name must be at least 2 characters long.");
    }
    this.value = value;
  }
}
