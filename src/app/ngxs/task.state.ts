import { TaskStateModel } from './task.state';
import { TodoV2Service } from './../services/todo-v2.service';
import { GetTasks, CreateNewTask, DeleteTask } from './task.actions';
import { State, Action, StateContext } from '@ngxs/store';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/Todo';
import { Response } from 'src/app/models/Response';
import { api } from '../config/api';
import { todos } from 'src/seed/data';

export interface TaskStateModel {
  tasks: Todo[];
  isLoading: boolean;
  error: string;
}

@State<TaskStateModel>({
  name: 'task',
  defaults: {
    tasks: [],
    isLoading: false,
    error: '',
  }
})
export class TaskState {
  constructor(
    // private todoService: TodoService
    private todoService: TodoV2Service
  ) {}

  @Action(GetTasks, { cancelUncompleted: true })
  GetTasks({ patchState, getState }: StateContext<TaskStateModel>) {
    patchState({ isLoading: true });

    const currentTaskState = getState();
    const currentTasks = currentTaskState.tasks;

    // if (currentTasks && currentTasks.length === 0) {
    //   // setTimeout(() => {
    //     patchState({ tasks: todos, isLoading: false });
    //   // }, api.networkDelay);
    // }

    if (currentTasks && currentTasks.length === 0) {
      this.todoService.list().subscribe(
        (response) => {
          if (response.errors && response.errors.length > 0) {
            patchState({ error: response.errors.toString(), isLoading: false });
          } else {
            const tasks = response.data;
            patchState({ tasks, isLoading: false });
          }
        },
        (error) => {
          const errorMessage = error.toString();
          patchState({ error: errorMessage, isLoading: false });
        }
      );
    }
  }

  @Action(CreateNewTask, { cancelUncompleted: true })
  CreateNewTask({ patchState, getState }: StateContext<TaskStateModel>, { payload }: CreateNewTask) {
    patchState({ isLoading: true });
    const item = payload.task;

    // const currentTaskState = getState();
    // const currentTasks = currentTaskState.tasks;
    // const newTask = { id: currentTasks.length, ...item } as Todo;
    // const newTasks = [...currentTasks, newTask];
    // setTimeout(() => {
    // patchState({ tasks: newTasks, isLoading: false });
    // }, api.networkDelay);

    this.todoService.create(item).subscribe(
      (response) => {
        if (response.errors && response.errors.length > 0) {
          patchState({ error: response.errors.toString(), isLoading: false });
        } else {
          const currentTaskState = getState();
          const currentTasks = currentTaskState.tasks;
          const newTask = response.data;
          const newTasks = [...currentTasks, newTask];
          patchState({ tasks: newTasks, isLoading: false });
        }
      },
      (error) => {
        const errorMessage = error.toString();
        patchState({ error: errorMessage, isLoading: false });
      }
    );
  }

  @Action(DeleteTask)
  deleteTask({ patchState, getState }: StateContext<TaskStateModel>, { payload }: DeleteTask) {
    patchState({ isLoading: true });
    const { taskId } = payload;
    this.todoService.delete(taskId).subscribe(
      (response) => {
        if (response.errors && response.errors.length > 0) {
          patchState({ isLoading: false, error: response.errors.toString() });
        } else {
          const deletedTask = response.data;
          if (deletedTask) {
            const currentState = getState();
            const currentTasks = currentState.tasks;
            const filteredTasks = currentTasks.filter((task: Todo) => {
              return task.id !== deletedTask.id;
            });
            patchState({ tasks: filteredTasks });
          }
        }
      }
    );
  }
}
