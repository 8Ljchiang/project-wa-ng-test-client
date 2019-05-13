import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api } from '../config/api';
import { Response } from '../models/Response';
import { todos } from 'src/seed/data';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(
    private http: HttpClient
  ) { }

  toggleCompleted(todo: Todo): Observable<Response<Todo[]>> {
    const url = `${api.root}/todos`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: todo,
    };
    return this.http.put<Response<Todo[]>>(url, httpOptions);
  }

  getTodos(): Observable<Response<Todo[]>> {
    const url = `${api.root}/todos`;
    // return this.http.get<Response<Todo[]>>(url);
    // fake response for testing and building the front end.
    const response = {
      data: todos,
      errors: []
    };
    return of(response);
  }

  createTodo(todo: { title: string, completed: boolean }): Observable<Response<Todo[]>> {
    const url = `${api.root}/todos`;
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post<Response<Todo[]>>(url, todo, options);
  }

  deleteTodo(todo: Todo): Observable<Response<Todo[]>> {
    const url = `${api.root}/todos/${todo.id}`;
    return this.http.delete<Response<Todo[]>>(url);
  }
}
