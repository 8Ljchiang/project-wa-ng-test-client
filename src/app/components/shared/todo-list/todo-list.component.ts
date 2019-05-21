import { Observable } from 'rxjs';
import { TodosPageFeatureService } from 'src/app/services/todos-page-feature.service';
import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/Todo';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // todos: Todo[];
  @Select(state => state.task.tasks) todos$: Observable<Todo[]>;
  // isLoading = false;
  // error = '';

  constructor(
    private todoService: TodosPageFeatureService
    // private todoService: TodoService
  ) { }

  ngOnInit() {
    this.todoService.fetchTodos();

    // this.todoService.taskState$.subscribe(
    //   state => {
    //     this.todos = state.tasks;
    //     this.error = state.error;
    //     this.isLoading = state.isLoading;
    //   }
    // );
    // this.todoService.getTodos()
    //   .subscribe(response => {
    //     this.todos = response.data;
    //   });
  }

  addTodo(todoWithoutid: { title: string, completed: boolean, isArchived: boolean}) {
    if (todoWithoutid && todoWithoutid.title) {
      this.todoService.createNewTodo(todoWithoutid);
    }
  }

  deleteTodo(todo: Todo) {
    if (todo && typeof(todo.id) === 'number') {
      this.todoService.deleteTodo(todo);
    }
  }
  // addTodo(todoWithoutId: { title: string, completed: boolean}) {
  //   if (todoWithoutId && todoWithoutId.title) {
  //     this.todoService.createTodo(todoWithoutId).subscribe((response) => {
  //       this.todos = response.data;
  //     });
  //   }
  // }

  // deleteTodo(todo: Todo) {
  //   console.log('deleted: ', todo);

    // on server
    // this.todoService.deleteTodo(todo).subscribe((response: Response<Todo>) => {
    //   console.log(response);
    //   // in ui
    //   this.todos = this.todos.filter((t: Todo) => {
    //     return t.id !== parseInt(response.data.id.toString(), 10);
    //   });
    // });
  // }
}
