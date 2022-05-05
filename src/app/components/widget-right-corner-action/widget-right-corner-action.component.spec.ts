import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetRightCornerActionComponent } from './widget-right-corner-action.component';

describe('WidgetRightCornerActionComponent', () => {
  let component: WidgetRightCornerActionComponent;
  let fixture: ComponentFixture<WidgetRightCornerActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetRightCornerActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetRightCornerActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
