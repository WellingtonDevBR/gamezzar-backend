export class Password {
  value: string;

  constructor(value: string) {
    if (!value || value.length < 6) {
      throw new Error("Password must be at least 6 characters long.");
    }
    this.value = value;
  }
}
