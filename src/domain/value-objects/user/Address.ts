export class Address {
  value: string;
  
  constructor(value: string) {
    if (!value || value.length < 2) {
      throw new Error("Address must be at least 2 characters long.");
    }
    this.value = value;
  }
}
