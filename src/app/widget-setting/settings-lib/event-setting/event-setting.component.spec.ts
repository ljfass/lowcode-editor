import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSettingComponent } from './event-setting.component';

describe('EventSettingComponent', () => {
  let component: EventSettingComponent;
  let fixture: ComponentFixture<EventSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
