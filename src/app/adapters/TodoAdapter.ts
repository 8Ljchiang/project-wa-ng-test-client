import { Todo } from './../models/Todo';
import { Adapter } from './../core/adapter';

export class TodoAdapter implements Adapter<Todo> {
  adapt(item: any): Todo {
    const todo: Todo = {
      id: item.id,
      title: item.title,
      completed: item.completed,
      isArchived: item.isArchived,
    };

    return todo;
  }
}
