import { TestBed } from '@angular/core/testing';

import { ColumnEditService } from './column-edit.service';

describe('ColumnEditService', () => {
  let service: ColumnEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColumnEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
