import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.todoService.getTodos()
      .subscribe(response => {
        this.todos = response.data;
      });
  }

  createTodo(todoWithoutId: { title: string, completed: boolean}) {
    if (todoWithoutId && todoWithoutId.title) {
      this.todoService.createTodo(todoWithoutId).subscribe((response) => {
        this.todos = response.data;
      });
    }
  }
}
