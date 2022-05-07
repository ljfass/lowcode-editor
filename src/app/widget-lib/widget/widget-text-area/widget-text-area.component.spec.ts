import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTextAreaComponent } from './widget-text-area.component';

describe('WidgetTextAreaComponent', () => {
  let component: WidgetTextAreaComponent;
  let fixture: ComponentFixture<WidgetTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetTextAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
