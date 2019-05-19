import { TestBed } from '@angular/core/testing';

import { TodoV2Service } from './todo-v2.service';

describe('TodoV2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoV2Service = TestBed.get(TodoV2Service);
    expect(service).toBeTruthy();
  });
});
