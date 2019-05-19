import { Store } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/models/Todo';
import { ResourceService } from './resource.service';
import { Injectable } from '@angular/core';
import { api } from '../config/api';
import { TodoAdapter } from '../adapters/TodoAdapter';

@Injectable({
  providedIn: 'root'
})
export class TodoV2Service extends ResourceService<Todo> {
  constructor(
    store: Store,
    httpClient: HttpClient
  ) {
    super(store, httpClient, api.root, 'tasks', new TodoAdapter());
  }
}
