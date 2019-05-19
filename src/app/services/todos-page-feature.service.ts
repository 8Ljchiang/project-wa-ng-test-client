import { GetTasks, CreateNewTask } from './../ngxs/task.actions';
import { Observable } from 'rxjs';
import { Todo } from './../models/Todo';
import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TaskState, TaskStateModel } from '../ngxs/task.state';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

@Injectable({
  providedIn: 'root'
})
export class TodosPageFeatureService {
  @Select(TaskState)
  public taskState$: Observable<TaskStateModel>;

  constructor(
    private store: Store,
  ) { }

  @Dispatch()
  public fetchTodos() {
    return new GetTasks();
  }

  @Dispatch()
  public createNewTodo(newTask: Partial<Todo>) {
    return new CreateNewTask({ task: newTask });
  }
}
