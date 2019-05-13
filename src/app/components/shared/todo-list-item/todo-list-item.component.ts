import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
  }

  // Set dynamic classes
  setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };

    return classes;
  }

  onToggle(todo: Todo) {
    console.log('toggle in ui');
    todo.completed = !todo.completed;
    console.log('toggle on server');
    this.todoService.toggleCompleted(todo).subscribe((t: any) => {
      console.log(t);
    });
  }

  onDelete(todo: Todo) {
    console.log('delete');
    this.deleteTodo.emit(todo);

    // in ui
  }
}
