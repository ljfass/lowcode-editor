import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortableColumnsListComponent } from './sortable-columns-list.component';

describe('SortableColumnsListComponent', () => {
  let component: SortableColumnsListComponent;
  let fixture: ComponentFixture<SortableColumnsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortableColumnsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortableColumnsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
