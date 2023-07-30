import validator from 'validator';

export class Email {
  value: string;

  constructor(value: string) {
    if (!validator.isEmail(value)) {
      throw new Error("A valid email must be provided.");
    }
    this.value = value;
  }
  
}
