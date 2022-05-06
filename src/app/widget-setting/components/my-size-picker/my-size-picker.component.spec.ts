import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySizePickerComponent } from './my-size-picker.component';

describe('MySizePickerComponent', () => {
  let component: MySizePickerComponent;
  let fixture: ComponentFixture<MySizePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySizePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySizePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
