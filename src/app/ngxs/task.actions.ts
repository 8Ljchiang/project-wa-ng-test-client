import { Todo } from './../models/Todo';
export class SetTasks {
  static readonly type = '[task] SET_TASKS';
  constructor(public payload: { tasks: Todo[] }) {}
}

export class SetTasksDataIsLoading {
  static readonly type = '[task] SET_LOADING';
  constructor(public payload: { isLoading: boolean }) {}
}

export class SetTasksDataError {
  static readonly type = '[task] SET_ERROR';
  constructor(public payload: { error: string }) {}
}

export class GetTasks {
  static readonly type = '[task] GET_TASKS';
  constructor() {}
}

export class CreateNewTask {
  static readonly type = '[task] CREATE_TASK';
  constructor(public payload: { task: Partial<Todo> }) {}
}

export class CompleteTask {
  static readonly type = '[task] COMPLETE_TASK';
  constructor(public payload: { taskId: number }) {}
}

export class ArchiveTask {
  static readonly type = '[task] ARCH_TASK';
  constructor(public payload: { taskId: number}) {}
}

export class UnarchiveTask {
  static readonly type = '[task] UNARCH_TASK';
  constructor(public payload: { taskId: number }) {}
}

export class DeleteTask {
  static readonly type = '[task] DELETE_TASK';
  constructor(public payload: { taskId: number }) {}
}
