import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSettingModalComponent } from './event-setting-modal.component';

describe('EventSettingModalComponent', () => {
  let component: EventSettingModalComponent;
  let fixture: ComponentFixture<EventSettingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventSettingModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSettingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
