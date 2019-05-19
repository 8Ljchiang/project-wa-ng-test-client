import { BaseObject } from './BaseObject';

export interface Todo extends BaseObject {
  title: string;
  completed: boolean;
  isArchived: boolean;
}
