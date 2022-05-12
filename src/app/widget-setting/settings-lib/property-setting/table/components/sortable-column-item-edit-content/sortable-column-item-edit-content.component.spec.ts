import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortableColumnItemEditContentComponent } from './sortable-column-item-edit-content.component';

describe('SortableColumnItemEditContentComponent', () => {
  let component: SortableColumnItemEditContentComponent;
  let fixture: ComponentFixture<SortableColumnItemEditContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortableColumnItemEditContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortableColumnItemEditContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
