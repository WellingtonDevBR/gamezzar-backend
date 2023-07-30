import { v4 as uuidv4 } from 'uuid';

export function UniqueEntityID(): string {
  return uuidv4();
}