import { TestBed } from '@angular/core/testing';

import { TodosPageFeatureService } from './todos-page-feature.service';

describe('TodosPageFeatureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodosPageFeatureService = TestBed.get(TodosPageFeatureService);
    expect(service).toBeTruthy();
  });
});
