import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPaginationComponent } from './widget-pagination.component';

describe('WidgetPaginationComponent', () => {
  let component: WidgetPaginationComponent;
  let fixture: ComponentFixture<WidgetPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
