export class Username {
  value: string;

  constructor(value: string) {
    if (!value || value.length < 6) {
      throw new Error("Username must be at least 6 characters long.");
    }
    this.value = value;
  }
}
