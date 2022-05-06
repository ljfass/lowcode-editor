import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyColorPickerComponent } from './my-color-picker.component';

describe('MyColorPickerComponent', () => {
  let component: MyColorPickerComponent;
  let fixture: ComponentFixture<MyColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyColorPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
